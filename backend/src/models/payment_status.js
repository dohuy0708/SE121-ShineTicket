// models/PaymentStatus.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác

class PaymentStatus extends Model {}

PaymentStatus.init(
  {
    payment_status_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "PaymentStatus", // Tên của model
    tableName: "PaymentStatus", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default PaymentStatus;
