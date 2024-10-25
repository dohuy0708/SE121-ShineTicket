// migrations/mg-create-venues.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Venues", {
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      venue_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      street_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      ward: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      district: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Venues");
  },
};
