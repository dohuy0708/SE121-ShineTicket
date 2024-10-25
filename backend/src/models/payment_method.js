// models/PaymentMethod.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác

class PaymentMethod extends Model {}

PaymentMethod.init(
  {
    payment_method_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    method_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "PaymentMethod", // Tên của model
    tableName: "PaymentMethod", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default PaymentMethod;
