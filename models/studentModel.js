const { models } = require("../models/definition");

module.exports = {
  createStudent: async function (body) {
    const result = await models.Student.create(body);
    return result;
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
