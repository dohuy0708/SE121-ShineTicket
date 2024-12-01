import express from "express";
import {
  handleListRoles,
  handleGetRole,
  handleCreateRole,
  handleEditRole,
  handleDeleteRole,
} from "../controllers/roleController.js";

let routerRole = express.Router();

// Role controller
routerRole.get("/api/list-roles", handleListRoles);
routerRole.get("/api/get-role", handleGetRole);
routerRole.post("/api/create-role", handleCreateRole);
routerRole.put("/api/edit-role", handleEditRole);
routerRole.delete("/api/delete-role", handleDeleteRole);

export default routerRole;
