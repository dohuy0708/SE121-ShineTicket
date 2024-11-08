"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
import configJson from "../config/config.json" assert { type: "json" };
const config = configJson[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    console.log(`Processing file: ${file}`); // Kiểm tra tên file
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach(async (file) => {
    const modelPath = pathToFileURL(path.join(__dirname, file)).href;

    const { default: model } = await import(modelPath);
    if (model) {
      db[model.name] = new model(sequelize, Sequelize.DataTypes);
    } else {
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Thêm đoạn kiểm tra kết nối cơ sở dữ liệu
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối cơ sở dữ liệu thành công!");
  } catch (error) {
    console.error("Không thể kết nối cơ sở dữ liệu:", error);
  }
})();

export default db;
