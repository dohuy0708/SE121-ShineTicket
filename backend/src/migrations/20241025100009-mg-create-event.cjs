// migrations/mg-create-events.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      event_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "EventTypes", // Tên bảng mà khóa ngoại tham chiếu
          key: "event_type_id", // Tên khóa chính trong bảng EventTypes
        },
        onUpdate: "CASCADE", // Cập nhật khóa ngoại khi khóa chính thay đổi
        onDelete: "SET NULL", // Đặt khóa ngoại thành NULL khi khóa chính bị xóa
      },
      event_format: {
        type: Sequelize.ENUM("online", "offline"),
        allowNull: false,
      },
      organizer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Organizers", // Tên bảng mà khóa ngoại tham chiếu
          key: "organizer_id", // Tên khóa chính trong bảng Organizers
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Venues", // Tên bảng mà khóa ngoại tham chiếu
          key: "venue_id", // Tên khóa chính trong bảng Venues
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      event_status_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "EventStatuses", // Tên bảng mà khóa ngoại tham chiếu
          key: "event_status_id", // Tên khóa chính trong bảng EventStatuses
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      total_tickets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      available_tickets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      logo_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cover_image_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Events");
  },
};
