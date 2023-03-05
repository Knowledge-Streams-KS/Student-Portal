const bcrypt = require('bcrypt');
const teacherModel = require("../models/teacherModel")

module.exports = {
    createTeacher : async function(body){
        const data = await teacherModel.createTeacher(body);
        return data;
},
    getTeacher : async function(body){
        const data = await teacherModel.getTeacher();
        return data;
},
    getTeacherById : async function(ids){
        const data = await teacherModel.getTeacherById(ids);
        return data;
},
updateTeacher : async function(body){
    const data = await teacherModel.updateTeacher(body);
    return data;
},
removeTeacher : async function(id){
    const data = await teacherModel.removeTeacher(id);
    return data;
},

};