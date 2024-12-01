import express from "express";

import routerEvent from "./routeEvent.js";
import routerOrder from "./routeOrder.js";
import routerOrderDetail from "./routeOrderDetail.js";
import routerOrganizer from "./routeOrganizer.js";
import routerPayment from "./routePayment.js";
import routerRole from "./routeRole.js";
import routerTicket from "./routeTicket.js";
import routerUser from "./routeUser.js";
import routerVenue from "./routeVenue.js";

let router = express.Router();

let initWebRoutes = (app) => {
  // Import routes
  app.use("/user", routerUser);
  app.use("/order-detail", routerOrderDetail);
  app.use("/ticket", routerTicket);
  app.use("/venue", routerVenue);
  app.use("/order", routerOrder);
  app.use("/payment", routerPayment);
  app.use("/event", routerEvent);
  app.use("/role", routerRole);
  app.use("/organizer", routerOrganizer);

  return app;
};

export default initWebRoutes;
