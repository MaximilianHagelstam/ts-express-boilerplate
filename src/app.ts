import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "./config/logger";
import { db } from "./config/database";

// Routers
import { postRouter } from "./routes";

// Test db connection
db.authenticate()
  .then(() => {
    logger.info("Connected to db");
  })
  .catch((err) => {
    logger.error(err);
  });

const app = express();

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/post", postRouter);

export { app };
