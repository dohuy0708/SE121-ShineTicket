// seeders/[timestamp]-add-users.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        username: "user1",
        email: "user1@example.com",
        password: "12345678@", // Chú ý: mật khẩu nên được hash trước khi lưu vào DB
        phone_number: "0123456789",
        date_of_birth: "1995-01-01",
        role_id: 1,
      },
      {
        username: "admin",
        email: "admin@example.com",
        password: "12345678@", // Chú ý: mật khẩu nên được hash trước khi lưu vào DB
        phone_number: "0987654321",
        date_of_birth: "1990-02-02",
        role_id: 2,
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: "12345678@", // Chú ý: mật khẩu nên được hash trước khi lưu vào DB
        phone_number: "0111222333",
        date_of_birth: "1985-03-03",
        role_id: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
