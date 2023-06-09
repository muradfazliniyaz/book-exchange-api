import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../common/sequelize.js";


const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    tableName: "users",
  }
);

export default User;
