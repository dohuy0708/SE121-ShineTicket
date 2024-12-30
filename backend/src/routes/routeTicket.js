import express from "express";
import {
  handleListTickets,
  handleGetTicket,
  handleCreateTicket,
  handleEditTicket,
  handleDeleteTicket,
  handleGetTicketPrice,
} from "../controllers/ticketController.js";

let routerTicket = express.Router();

// Ticket controller
routerTicket.get("/list-tickets", handleListTickets);
routerTicket.get("/get-ticket", handleGetTicket); // Query string: /get-ticket?ticketId=value
routerTicket.post("/create-ticket", handleCreateTicket);
routerTicket.put("/edit-ticket", handleEditTicket); // Query string: /edit-ticket?ticketId=value
routerTicket.delete("/delete-ticket", handleDeleteTicket); // Query string: /api/delete-ticket?ticketId=value
routerTicket.get("/get-ticket_price", handleGetTicketPrice);
export default routerTicket;
