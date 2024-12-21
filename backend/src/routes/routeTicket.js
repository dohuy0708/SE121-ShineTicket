import express from "express";
import {
  handleListTickets,
  handleGetTicket,
  handleCreateTicket,
  handleEditTicket,
  handleDeleteTicket,
} from "../controllers/ticketController.js";

let routerTicket = express.Router();

// Ticket controller
routerTicket.get("/api/list-tickets", handleListTickets);
routerTicket.get("/api/get-ticket", handleGetTicket); // Query string: /api/get-ticket?ticketId=value
routerTicket.post("/api/create-ticket", handleCreateTicket);
routerTicket.put("/api/edit-ticket", handleEditTicket); // Query string: /api/edit-ticket?ticketId=value
routerTicket.delete("/api/delete-ticket", handleDeleteTicket); // Query string: /api/delete-ticket?ticketId=value

export default routerTicket;
