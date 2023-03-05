const { models } = require("../models/definition");

module.exports = {
  createTeacher: async function (body) {
    const result = await models.Teacher.create(body);
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
