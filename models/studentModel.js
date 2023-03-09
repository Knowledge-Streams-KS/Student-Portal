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
  getStudent: async function () {
    const result = await models.Student.findAll({
		include: {
			model: models.User,
		}
	});
    return result;
  },
  getStudentById: async function (ids) {
    const result = await models.Student.findAll({
      where: { id: ids },
      include: {
        model: models.User,
      },
    });
    return result;
  },
  updateStudent: async function (body) {
		const result = await models.Student.findByPk(body.id);
    const updateUser = await models.User.update(
      {
        ...body,
      },
      {
        where: { id: result.id },
      },
	  );
    const updateStudent = await models.Student.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      },
    );
		return "Student Information is up to date";
  },
 removeStudent: async function (ids) {
		const result = await models.Student.findByPk(ids);
    const removeUser = await models.User.destroy({
      where: { id: result.userId },
    });
    const removeStudent = await models.Student.destroy({
      where: { id: ids },
    });
    return "Deleted Student" ;
  },
};
