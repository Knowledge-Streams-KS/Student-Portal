const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Student extends Model {}

Student.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

    registrationNo: {
      unique:true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    semester: {
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: 'Student'
  }
);

module.exports = Student;
