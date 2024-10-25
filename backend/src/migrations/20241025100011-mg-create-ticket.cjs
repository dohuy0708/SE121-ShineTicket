// migrations/mg-create-tickets.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tickets", {
      ticket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "event_id",
        },
        onDelete: "CASCADE",
      },
      ticket_type: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ticket_status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "TicketStatus",
          key: "ticket_status_id",
        },
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Tickets");
  },
};
