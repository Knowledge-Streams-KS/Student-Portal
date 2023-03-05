const bcrypt= require('bcrypt');
const userModel = require("../models/userModel")

module.exports = {
    createUser : async function(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        const user = await userModel.getUserByAttribute(body);
        if(user.count!=0){
            return "user already exists!"
        }
        
        const data =  await userModel.createUser(body);
        return data;
    },

    getUser : async function(){
        const data =  await userModel.getUser();
        return data;
    },

    getUserById : async function(ids){
        const data =  await userModel.getUserById(ids);
        return data;
    },

    updateUser : async function(body){
        const data =  await userModel.updateUser(body);
        return data;
    },

    removeUser: async function(ids){
        const user = await userModel.getUserById(body);
        if(user.count!=0){
            return "user already exists!"
        }
        const data =  await userModel.removeUser(ids);
        return data;
    }
    
};