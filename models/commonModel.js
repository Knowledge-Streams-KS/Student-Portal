const {models} = require ('../models/definition')
const jwtSecret = require ('../config.json')
const jwt = require ('jsonwebtoken')

let refreshTokens = []

function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

module.exports = {

    login: async function(body){
        console.log(body);
        let user = await models.User.findOne({
            where:{
                email:body.email
            }
        })
        user = user.dataValues;
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken: accessToken, refreshTokens:token})
    },

    logout: async function(body){
        refreshTokens = refreshTokens.filter(token => token !== body.token)
        return({refreshToken: refreshTokens})
    }
}