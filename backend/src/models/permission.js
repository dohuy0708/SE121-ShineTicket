import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class Permission extends Model {}

Permission.init(
  {
    permission_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    permission_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "Permission", // Tên của model
    tableName: "Permissions", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default Permission;
