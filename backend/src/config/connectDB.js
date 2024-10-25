import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ShineTicket", "root", "123456", {
  host: "localhost",
  port: 3308,
  dialect: "mysql",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log(" Connection successfully!");
  } catch (error) {
    console.error("Unable to connect to Database");
  }
};

export { sequelize, connection };
