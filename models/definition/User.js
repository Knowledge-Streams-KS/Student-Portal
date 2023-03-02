const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

    firstName: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(),
    },

    email: {
      unique:true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    phoneNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    password: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING()
       }
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: 'User'
  }
);

module.exports = User;
