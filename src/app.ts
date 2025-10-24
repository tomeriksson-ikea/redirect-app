import express, { Express } from "express";

export function setupApp(): Express {
  const app = express();

  app.get("/", (req, res, next) => {
    res.status(200).send("Hello World");
  });

  return app;
}
