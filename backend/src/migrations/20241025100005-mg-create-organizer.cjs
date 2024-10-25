// migrations/mg-create-organizers.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Organizers", {
      organizer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      organizer_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      organizer_info: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      organizer_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      organizer_phone_number: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      account_number: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      bank_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      owner_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users", // Tên bảng mà khóa ngoại tham chiếu
          key: "user_id", // Tên khóa chính trong bảng Users
        },
        onUpdate: "CASCADE", // Cập nhật khóa ngoại khi khóa chính thay đổi
        onDelete: "SET NULL", // Đặt khóa ngoại thành NULL khi khóa chính bị xóa
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Organizers");
  },
};
