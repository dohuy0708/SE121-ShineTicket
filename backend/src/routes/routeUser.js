import express from "express";
import { getHomePage } from "../controllers/homeController.js";
import {
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
  handleGetUser,
  handleListUser,
  handleLogin,
} from "../controllers/userController.js";

let routerUser = express.Router();
// User controller
routerUser.get("/", getHomePage);
routerUser.get("/login", handleLogin);
routerUser.get("/api/list-user", handleListUser);
routerUser.get("/api/get-user", handleGetUser);
routerUser.post("/api/create-user", handleCreateUser);
routerUser.put("/api/edit-user", handleEditUser);
routerUser.delete("/api/delete-user", handleDeleteUser);

export default routerUser;
