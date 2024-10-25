// models/Tickets.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác

class Tickets extends Model {}

Tickets.init(
  {
    ticket_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Events",
        key: "event_id",
      },
      onDelete: "CASCADE",
    },
    ticket_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ticket_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "TicketStatus",
        key: "ticket_status_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "Tickets", // Tên của model
    tableName: "Tickets", // Tên bảng
    timestamps: false, // Bỏ qua các cột createdAt và updatedAt
  }
);

export default Tickets;
