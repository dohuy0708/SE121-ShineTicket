"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tickets", "event_datetime", {
      type: Sequelize.DATE,
      allowNull: false, // Nếu cột không được phép null
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Tickets", "event_datetime");
  },
};
