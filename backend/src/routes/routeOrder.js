import express from "express";
import {
  handleListOrders,
  handleGetOrder,
  handleCreateOrder,
  handleEditOrder,
  handleDeleteOrder,
} from "../controllers/orderController.js";

let routerOrder = express.Router();

// Order controller
routerOrder.get("/api/list-orders", handleListOrders);
routerOrder.get("/api/get-order", handleGetOrder); // Query string: /api/get-order?orderId=value
routerOrder.post("/api/create-order", handleCreateOrder);
routerOrder.put("/api/edit-order", handleEditOrder); // Query string: /api/edit-order?orderId=value
routerOrder.delete("/api/delete-order", handleDeleteOrder); // Query string: /api/delete-order?orderId=value

export default routerOrder;
