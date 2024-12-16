import express from "express";

import { handleDeleteEvent } from "../controllers/eventController.js";
import { handleListEvents } from "../controllers/eventController.js";
import { handleGetEvent } from "../controllers/eventController.js";
import { handleCreateEvent } from "../controllers/eventController.js";
import { handleEditEvent } from "../controllers/eventController.js";
import upload from "../middleware/Image/Upload.js";

let routerEvent = express.Router();

// Event controller
routerEvent.get("/list", handleListEvents);
routerEvent.get("/get", handleGetEvent);
routerEvent.post(
  "/create",
  upload.fields([
    { name: "logo_url", maxCount: 1 },
    { name: "cover_image_url", maxCount: 1 },
  ]),
  handleCreateEvent
);
routerEvent.put(
  "/edit",
  upload.fields([
    { name: "logo_url", maxCount: 1 },
    { name: "cover_image_url", maxCount: 1 },
  ]),
  handleEditEvent
);
routerEvent.delete("/delete", handleDeleteEvent);

export default routerEvent;
