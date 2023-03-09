const { models } = require("../models/definition");
const { createUser } = require('../models/userModel');
const bcrypt = require('bcrypt')

module.exports = {
  createTeacher: async function (body) {
    const saltRounds = 10;
	const hash = bcrypt.hashSync(body.password, saltRounds);
	body.password = hash;
	
	var userData = {
		firstName: body.firstName, 
		lastName: body.lastName,
		email: body.email,
		phoneNumber: body.phoneNumber,
		password: body.password,
		role: body.role
	}

	var teacherData = {
		teacherId: body.teacherId,
		department: body.department,
		officeLocation: body.officeLocation,
		startTime: body.startTime,
		endTime: body.endTime,
	}

	const user = await createUser(userData)

	teacherData = {...teacherData, userId: user.id}
    const result = await models.Teacher.create(teacherData);
    return result;
  },
  getTeacher: async function (body) {
    const result = await models.Teacher.findAll();
    return result;
  },
  getTeacherById: async function (ids) {
    const result = await models.Teacher.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateTeacher: async function (body) {
    console.log(body);
    const result = await models.Teacher.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeTeacher: async function (ids) {
    const result = await models.Teacher.destroy({
      where: { id: ids },
    });
    return "Deleted Teachers";
  },
};
