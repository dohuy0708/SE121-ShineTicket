// src/migrations/20240101010101-add-video-url-to-events.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Thêm cột `video_url` vào bảng `Events`
    await queryInterface.addColumn("Events", "video_url", {
      type: Sequelize.STRING(255), // Kiểu dữ liệu VARCHAR với độ dài tối đa 255 ký tự
      allowNull: true, // Cho phép null nếu sự kiện không có video
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Nếu rollback migration, xóa cột `video_url`
    await queryInterface.removeColumn("Events", "video_url");
  },
};
