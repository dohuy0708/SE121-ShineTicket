// models/Events.js
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connectDB.js"; // Đảm bảo đường dẫn chính xác và có ".js" nếu bạn dùng ES Module

class Events extends Model {}

Events.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "EventTypes", // Tên bảng mà khóa ngoại tham chiếu
        key: "event_type_id", // Tên khóa chính trong bảng EventTypes
      },
    },
    event_format: {
      type: DataTypes.ENUM("online", "offline"),
      allowNull: false,
    },
    organizer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Organizers", // Tên bảng mà khóa ngoại tham chiếu
        key: "organizer_id", // Tên khóa chính trong bảng Organizers
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Venues", // Tên bảng mà khóa ngoại tham chiếu
        key: "venue_id", // Tên khóa chính trong bảng Venues
      },
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "EventStatuses", // Tên bảng mà khóa ngoại tham chiếu
        key: "event_status_id", // Tên khóa chính trong bảng EventStatuses
      },
    },
    total_tickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available_tickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    logo_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cover_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize, // Tham chiếu đến đối tượng Sequelize đã kết nối
    modelName: "Events", // Tên của model
    tableName: "Events", // Tên bảng
    timestamps: true, // Tạo cột createdAt và updatedAt
  }
);

export default Events;
