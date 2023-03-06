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
    User, Student, Teacher, Course,
};


// roles-users one to many
User.hasOne(Student, {onDelete: 'CASCADE', foreignKey: 'userId'});
Student.belongsTo(User, {onDelete: 'CASCADE', foreignKey: 'userId'});
// roles-users one to many
User.hasOne(Teacher, {onDelete: 'CASCADE', foreignKey: 'userId'});
Teacher.belongsTo(User, {onDelete: 'CASCADE', foreignKey: 'userId'});

// roles-users many to many
Teacher.belongsToMany(Course, {through:"junction"});    
Course.belongsTo(Teacher, {through: "junction"});

let junction = sequelize.models.junction;
Student.hasMany(junction, {foreignKey: 'studentId'});
junction.belongsTo(Student, {foreignKey: 'studentId'});


sequelize.model = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = {db, models};