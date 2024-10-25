// migrations/mg-create-payments.cjs
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Payments", {
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "order_id",
        },
        onDelete: "CASCADE",
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
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
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
      amount_paid: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Payments");
  },
};
