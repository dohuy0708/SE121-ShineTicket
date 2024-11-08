// migrations/[timestamp]-remove-created-at-from-users.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "created_at");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "created_at", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });
  },
};
