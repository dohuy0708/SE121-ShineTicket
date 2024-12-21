import express from "express";
import {
  handleListPayments,
  handleGetPayment,
  handleCreatePayment,
  handleEditPayment,
  handleDeletePayment,
} from "../controllers/paymentController.js";

let routerPayment = express.Router();

// Payment controller
routerPayment.get("/api/list-payments", handleListPayments);
routerPayment.get("/api/get-payment", handleGetPayment); // Query string: /api/get-payment?paymentId=value
routerPayment.post("/api/create-payment", handleCreatePayment);
routerPayment.put("/api/edit-payment", handleEditPayment); // Query string: /api/edit-payment?paymentId=value
routerPayment.delete("/api/delete-payment", handleDeletePayment); // Query string: /api/delete-payment?paymentId=value

export default routerPayment;
