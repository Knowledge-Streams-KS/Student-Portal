const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const User  = require('../definition/User');
const Student  = require('../definition/Student');
const Teacher  = require('../definition/Teacher');
const Course  = require('../definition/Course');
const models = {
    User, Student, Teacher, Course
};


sequelize.model = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = {db, models};