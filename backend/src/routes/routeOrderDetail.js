import express from "express";
import {
  handleListOrderDetails,
  handleGetOrderDetail,
  handleCreateOrderDetail,
  handleEditOrderDetail,
  handleDeleteOrderDetail,
} from "../controllers/orderDetailController.js";

let routerOrderDetail = express.Router();

// OrderDetail controller
routerOrderDetail.get("/api/list-order-details", handleListOrderDetails);
routerOrderDetail.get("/api/get-order-detail", handleGetOrderDetail); // Query string: /api/get-order-detail?orderDetailId=value
routerOrderDetail.post("/api/create-order-detail", handleCreateOrderDetail);
routerOrderDetail.put("/api/edit-order-detail", handleEditOrderDetail); // Query string: /api/edit-order-detail?orderDetailId=value
routerOrderDetail.delete("/api/delete-order-detail", handleDeleteOrderDetail); // Query string: /api/delete-order-detail?orderDetailId=value

export default routerOrderDetail;
