import { Sequelize } from "sequelize";

const sequelize = new Sequelize("booky", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

export default sequelize;