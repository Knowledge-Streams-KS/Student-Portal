const commonModel = require('../models/commonModel')

module.exports  = {
    login : async function(body){
        const data = await commonModel.login(body);
        return data;
    },
    logout : async function(body){
        const data = await commonModel.logout(body);
        return data;
    },
    createToken : async function(body){
        const data = await commonModel.createToken(body);
        return data;
    }
}