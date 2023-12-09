const { Sequelize } = require("sequelize");

const sequelizeMysql = new Sequelize("nhankhau", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelizeMysql.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database .:", error);
  }
};
module.exports = connectDB;
