// models/Organizers.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class Organizers extends Model {}

Organizers.init(
  {
    organizer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    organizer_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    organizer_info: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    organizer_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    organizer_phone_number: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    account_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    owner_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "User", // Tên bảng mà khóa ngoại tham chiếu
        key: "user_id", // Tên khóa chính trong bảng Users
      },
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "Organizers", // Tên của model
    tableName: "Organizers", // Tên bảng
    timestamps: false, // Không tạo cột createdAt và updatedAt
  }
);

export default Organizers;
