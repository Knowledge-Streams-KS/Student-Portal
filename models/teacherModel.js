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
  getTeacher: async function () {
    const result = await models.Teacher.findAll({
		include: {
			model: models.User,
		}
	});
    return result;
  },
  getTeacherById: async function (ids) {
    const result = await models.Teacher.findAll({
      where: { id: ids },
      include: {
        model: models.User,
      },
    });
    return result;
  },
  updateTeacher: async function (body) {
		const result = await models.Teacher.findByPk(body.id);
    const updateUser = await models.User.update(
      {
        ...body,
      },
      {
        where: { id: result.id },
      },
	  );
    const updateTeacher = await models.Teacher.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      },
    );
		return "Teacher Information is up to date";
  },
  removeTeacher: async function (ids) {
		const result = await models.Teacher.findByPk(ids);
    const removeUser = await models.User.destroy({
      where: { id: result.userId },
    });
    const removeTeacher = await models.Teacher.destroy({
      where: { id: ids },
    });
    return "Deleted Teacher" ;
  },
};
