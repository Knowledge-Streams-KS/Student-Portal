const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class StudentTeacher extends Model {}

StudentTeacher.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: 'StudentTeacher'
  }
);

module.exports = StudentTeacher;
