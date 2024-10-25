// models/Users.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class Users extends Model {}

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Thay đổi thành true nếu bạn cho phép không có role
      references: {
        model: "Roles",
        key: "role_id",
      },
    },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "Users",
    timestamps: false, // Tắt timestamps tự động
    underscored: true, // Sử dụng dạng snake_case cho tên trường
  }
);

export default Users;
