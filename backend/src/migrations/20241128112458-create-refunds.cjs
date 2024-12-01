"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Refunds", {
      refund_id: {
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
      organizer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Organizers",
          key: "organizer_id",
        },
        onDelete: "CASCADE",
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      refund_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      commission: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      refund_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PaymentMethod",
          key: "payment_method_id",
        },
        onDelete: "CASCADE",
      },
      bank_transaction_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      payment_status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PaymentStatus",
          key: "payment_status_id",
        },
        onDelete: "CASCADE",
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Refunds");
  },
};
