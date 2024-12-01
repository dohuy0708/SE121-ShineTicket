import express from "express";

import { handleDeleteEvent } from "../controllers/eventController.js";
import { handleListEvents } from "../controllers/eventController.js";
import { handleGetEvent } from "../controllers/eventController.js";
import { handleCreateEvent } from "../controllers/eventController.js";
import { handleEditEvent } from "../controllers/eventController.js";

let routerEvent = express.Router();

// Event controller
routerEvent.get("/api/list-events", handleListEvents);
routerEvent.get("/api/get-event", handleGetEvent);
routerEvent.post("/api/create-event", handleCreateEvent);
routerEvent.put("/api/edit-event", handleEditEvent);
routerEvent.delete("/api/delete-event", handleDeleteEvent);

export default routerEvent;
