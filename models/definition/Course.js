const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Course extends Model {}

Course.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
    courseTitle: {
      allowNull: false,
      type: DataTypes.STRING(),
    },

    creditHours: {
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
    courseCode: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    lab:{
        allowNull:false,
        type: DataTypes.BOOLEAN(),
    }

  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: "Course",
  }
);

module.exports = Course;
