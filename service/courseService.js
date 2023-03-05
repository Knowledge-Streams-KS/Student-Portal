const bcrypt = require('bcrypt');
const courseModel = require("../models/courseModel")

module.exports = {
    createCourse : async function(body){
        const data = await courseModel.createCourse(body);
        return data;
},
    getCourse : async function(body){
        const data = await courseModel.getCourse();
        return data;
},
    getCourseById : async function(ids){
        const data = await courseModel.getCourseById(ids);
        return data;
},
updateCourse : async function(body){
    const data = await courseModel.updateCourse(body);
    return data;
},
removeCourse : async function(id){
    const data = await courseModel.removeCourse(id);
    return data;
},

};