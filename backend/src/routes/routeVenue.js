import express from "express";
import {
  handleListVenues,
  handleGetVenue,
  handleCreateVenue,
  handleEditVenue,
  handleDeleteVenue,
} from "../controllers/venueController.js";
import { authenticate } from "../middleware/JWT/IsAuth.js";

let routerVenue = express.Router();

// Venue controller
routerVenue.get("/api/list-venues", authenticate, handleListVenues);
routerVenue.get("/api/get-venue", handleGetVenue); // Query string: /api/get-venue?venueId=value
routerVenue.post("/api/create-venue", handleCreateVenue);
routerVenue.put("/api/edit-venue", handleEditVenue); // Query string: /api/edit-venue?venueId=value
routerVenue.delete("/api/delete-venue", handleDeleteVenue); // Query string: /api/delete-venue?venueId=value

export default routerVenue;
