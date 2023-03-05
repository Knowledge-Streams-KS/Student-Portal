const { models } = require("../models/definition");

module.exports = {
  createCourse: async function (body) {
    const result = await models.Course.create(body);
    return result;
  },
  getCourse: async function (body) {
    const result = await models.Course.findAll();
    return result;
  },
  getCourseById: async function (ids) {
    const result = await models.Course.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateCourse: async function (body) {
    console.log(body);
    const result = await models.Course.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeCourse: async function (ids) {
    const result = await models.Course.destroy({
      where: { id: ids },
    });
    return "Deleted Courses";
  },
};
