"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          role_id: 1,
          role_name: "customer",
        },
        {
          role_id: 2,
          role_name: "admin",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Roles",
      {
        role_name: { [Sequelize.Op.in]: ["customer", "admin"] },
      },
      {}
    );
  },
};
