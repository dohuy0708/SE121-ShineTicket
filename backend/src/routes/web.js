import express from "express";
import { getHomePage } from "../controllers/homeController.js";
import { handleLogin } from "../controllers/userController.js";
let router = express.Router();

let initWebRoutes = (app) => {
  // khai baodanh sach tat ca cac role

  router.get("/", getHomePage);
  router.get("/login", handleLogin);
  return app.use("/", router);
};

export default initWebRoutes;
