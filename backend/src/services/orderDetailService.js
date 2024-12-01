import OrderDetails from "../models/order_detail.js";

export const listOrderDetails = async () => {
  try {
    const orderDetails = await OrderDetails.findAll();
    return {
      errCode: 0,
      message: "Order details fetched successfully.",
      data: orderDetails,
    };
  } catch (error) {
    console.error("Error fetching order details:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch order details.",
    };
  }
};

export const getOrderDetailById = async (orderDetailId) => {
  try {
    const orderDetail = await OrderDetails.findByPk(orderDetailId);
    if (!orderDetail) {
      return {
        errCode: 2,
        message: "Order detail not found with the given ID.",
      };
    }
    return {
      errCode: 0,
      message: "Order detail fetched successfully.",
      data: orderDetail,
    };
  } catch (error) {
    console.error("Error fetching order detail by ID:", error.message);
    return {
      errCode: 1,
      message: "Unable to fetch order detail.",
    };
  }
};

export const createOrderDetail = async (orderDetailData) => {
  try {
    const newOrderDetail = await OrderDetails.create(orderDetailData);
    return {
      errCode: 0,
      message: "Order detail created successfully.",
      data: newOrderDetail,
    };
  } catch (error) {
    console.error("Error creating order detail:", error.message);
    return {
      errCode: 1,
      message: "Unable to create order detail.",
    };
  }
};

export const updateOrderDetail = async (orderDetailId, orderDetailData) => {
  try {
    const [updatedRowsCount] = await OrderDetails.update(orderDetailData, {
      where: { order_detail_id: orderDetailId },
    });
    if (updatedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Order detail not found with the given ID for updating.",
      };
    }
    return {
      errCode: 0,
      message: "Order detail updated successfully.",
    };
  } catch (error) {
    console.error("Error updating order detail:", error.message);
    return {
      errCode: 1,
      message: "Unable to update order detail.",
    };
  }
};

export const deleteOrderDetail = async (orderDetailId) => {
  try {
    const deletedRowsCount = await OrderDetails.destroy({
      where: { order_detail_id: orderDetailId },
    });
    if (deletedRowsCount === 0) {
      return {
        errCode: 2,
        message: "Order detail not found with the given ID for deletion.",
      };
    }
    return {
      errCode: 0,
      message: "Order detail deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting order detail:", error.message);
    return {
      errCode: 1,
      message: "Unable to delete order detail.",
    };
  }
};
