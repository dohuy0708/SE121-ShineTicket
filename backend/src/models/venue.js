// models/Venue.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class Venue extends Model {}

Venue.init(
  {
    venue_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    street_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ward: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "Venue", // Tên của model
    tableName: "Venues", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default Venue;
