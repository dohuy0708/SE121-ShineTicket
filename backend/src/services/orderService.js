import Orders from "../models/order.js";

export const listOrders = async () => {
  try {
    const orders = await Orders.findAll();
    return {
      errCode: 0,
      message: "Success",
      data: orders,
    };
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch orders.",
    };
  }
};

export const getOrderById = async (orderId) => {
  try {
    const order = await Orders.findByPk(orderId);
    if (!order) {
      return {
        errCode: 2,
        message: "Order not found.",
      };
    }
    return {
      errCode: 0,
      message: "Success",
      data: order,
    };
  } catch (error) {
    console.error("Error fetching order:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch order.",
    };
  }
};

export const createOrder = async (orderData) => {
  try {
    const newOrder = await Orders.create(orderData);
    return {
      errCode: 0,
      message: "Order created successfully.",
      data: newOrder,
    };
  } catch (error) {
    console.error("Error creating order:", error.message);
    return {
      errCode: 1,
      message: "Unable to create order.",
    };
  }
};

export const updateOrder = async (orderId, orderData) => {
  try {
    const [updatedRowsCount] = await Orders.update(orderData, {
      where: { order_id: orderId },
    });
    if (updatedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Order not found.",
      };
    }
    return {
      errCode: 0,
      message: "Order updated successfully.",
    };
  } catch (error) {
    console.error("Error updating order:", error.message);
    return {
      errCode: 1,
      message: "Unable to update order.",
    };
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const deletedRowsCount = await Orders.destroy({
      where: { order_id: orderId },
    });
    if (deletedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Order not found.",
      };
    }
    return {
      errCode: 0,
      message: "Order deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting order:", error.message);
    return {
      errCode: 1,
      message: "Unable to delete order.",
    };
  }
};
