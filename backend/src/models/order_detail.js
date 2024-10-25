// models/OrderDetails.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác

class OrderDetails extends Model {}

OrderDetails.init(
  {
    order_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Orders",
        key: "order_id",
      },
      onDelete: "CASCADE",
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Tickets",
        key: "ticket_id",
      },
      onDelete: "CASCADE",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "OrderDetails", // Tên của model
    tableName: "OrderDetails", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default OrderDetails;
