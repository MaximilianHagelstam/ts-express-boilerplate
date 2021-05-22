import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "./util/logger";
import { sequelize } from "./config/database";

// Controllers
import * as homeController from "./controllers/home";

// Test db connection
sequelize
  .authenticate()
  .then(() => {
    logger.info("Connected to db");
  })
  .catch((err) => {
    logger.error(`Error connecting to db: ${err}`);
  });

const app = express();

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export { app };
