// migrations/create-role-permission.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Role_Permission",
      {
        role_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Roles", // Tham chiếu đến bảng Roles
            key: "role_id",
          },
          onDelete: "CASCADE", // Xóa dữ liệu liên quan khi xóa Role
        },
        permission_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Permissions", // Tham chiếu đến bảng Permissions
            key: "permission_id",
          },
          onDelete: "CASCADE", // Xóa dữ liệu liên quan khi xóa Permission
        },
        primaryKey: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        primaryKey: ["role_id", "permission_id"], // Định nghĩa khóa chính cho bảng Role_Permission
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Role_Permission");
  },
};
