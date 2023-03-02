const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Teacher extends Model {}

Teacher.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING(),
    },

    teacherId: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    officeLocation: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    startTime: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    endTime: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: "Teacher",
  }
);

module.exports = Teacher;
