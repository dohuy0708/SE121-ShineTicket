import express from "express";
import {
  handleListOrganizers,
  handleGetOrganizer,
  handleCreateOrganizer,
  handleEditOrganizer,
  handleDeleteOrganizer,
} from "../controllers/organizerController.js";

let routerOrganizer = express.Router();

// Organizer controller
routerOrganizer.get("/api/list-organizers", handleListOrganizers);
routerOrganizer.get("/api/get-organizer", handleGetOrganizer); // Query string: /api/get-organizer?organizerId=value
routerOrganizer.post("/api/create-organizer", handleCreateOrganizer);
routerOrganizer.put("/api/edit-organizer", handleEditOrganizer); // Query string: /api/edit-organizer?organizerId=value
routerOrganizer.delete("/api/delete-organizer", handleDeleteOrganizer); // Query string: /api/delete-organizer?organizerId=value

export default routerOrganizer;
