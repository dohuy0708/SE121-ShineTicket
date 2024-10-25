// models/EventStatuses.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class EventStatuses extends Model {}

EventStatuses.init(
  {
    event_status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "EventStatuses", // Tên của model
    tableName: "EventStatuses", // Tên bảng
    timestamps: false, // Không tạo cột createdAt và updatedAt
  }
);

export default EventStatuses;
