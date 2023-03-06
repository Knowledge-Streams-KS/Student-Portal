const { models } = require("../models/definition");
const { createUser } = require('../models/userModel');
const bcrypt = require('bcrypt')

module.exports = {
  createStudent: async function (body) {
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

	var studentData = {
		registrationNo: body.registrationNo,
		department: body.department,
		semester: body.semester
	}

	const user = await createUser(userData)

	studentData = {...studentData, userId: user.id}

	const result = await models.Student.create(studentData);
	return result
  },
  getStudent: async function (body) {
    const result = await models.Student.findAll();
    return result;
  },
  getStudentById: async function (ids) {
    const result = await models.Student.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateStudent: async function (body) {
    console.log(body);
    const result = await models.Student.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeStudent: async function (ids) {
    const result = await models.Student.destroy({
      where: { id: ids },
    });
    return "Deleted Students";
  },
};
