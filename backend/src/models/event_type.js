// models/EventTypes.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class EventTypes extends Model {}

EventTypes.init(
  {
    event_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "EventTypes", // Tên của model
    tableName: "EventTypes", // Tên bảng
    timestamps: false, // Không tạo cột createdAt và updatedAt
  }
);

export default EventTypes;
