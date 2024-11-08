import express from "express";
import { getHomePage } from "../controllers/homeController.js";
import {
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
  handleGetUser,
  handleLogin,
} from "../controllers/userController.js";
let router = express.Router();

let initWebRoutes = (app) => {
  // khai baodanh sach tat ca cac role

  // User controller
  router.get("/", getHomePage);
  router.get("/login", handleLogin);
  router.get("/api/get-user", handleGetUser);
  router.post("/api/create-user", handleCreateUser);
  router.put("/api/edit-user", handleEditUser);
  router.delete("/api/delete-user", handleDeleteUser);

  // use route
  return app.use("/", router);
};

export default initWebRoutes;
