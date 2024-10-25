// models/RolePermission.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class RolePermission extends Model {}

RolePermission.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Roles", // Tham chiếu đến bảng Roles
        key: "role_id", // Khóa chính trong bảng Roles
      },
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Permissions", // Tham chiếu đến bảng Permissions
        key: "permission_id", // Khóa chính trong bảng Permissions
      },
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "RolePermission", // Tên của model
    tableName: "Role_Permission", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default RolePermission;
