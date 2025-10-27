import express, { Express } from "express";

export function setupApp(): Express {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("Hello World");
  });

  return app;
}
