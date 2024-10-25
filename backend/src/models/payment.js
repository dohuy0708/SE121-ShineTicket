// models/Payments.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác

class Payments extends Model {}

Payments.init(
  {
    payment_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Orders",
        key: "order_id",
      },
      onDelete: "CASCADE",
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PaymentMethod",
        key: "payment_method_id",
      },
      onDelete: "CASCADE",
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PaymentStatus",
        key: "payment_status_id",
      },
      onDelete: "CASCADE",
    },
    amount_paid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Payments",
    tableName: "Payments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Payments;
