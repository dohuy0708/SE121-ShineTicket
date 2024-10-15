import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello world, This is backend of project ShineTicket");
  });
  return app.use("/", router);
};

export default initWebRoutes;
