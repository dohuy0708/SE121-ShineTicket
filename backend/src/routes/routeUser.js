import express from "express";
import { getHomePage } from "../controllers/homeController.js";
import {
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
  handleGetUser,
  handleListUser,
  handleLogin,
  handleLogout,
  handleRegister,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/JWT/IsAuth.js";

let routerUser = express.Router();
// User controller
routerUser.get("/", getHomePage);
routerUser.post("/register", handleRegister);
routerUser.post("/login", handleLogin);
routerUser.get("/logout", handleLogout);

routerUser.get("/list", handleListUser);
routerUser.get("/get", handleGetUser);
routerUser.post("/create", handleCreateUser);
routerUser.put("/edit", handleEditUser);
routerUser.delete("/delete", handleDeleteUser);

export default routerUser;
