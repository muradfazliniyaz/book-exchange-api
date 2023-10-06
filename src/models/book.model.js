import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize.js";
import User from "./user.model.js" 

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    isbnNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    explanation: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    requestedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "books",
  }
);

User.hasMany(Book, { foreignKey: "userId", onDelete: "CASCADE"  });
Book.belongsTo(User, { foreignKey: "userId" });

export default Book;
