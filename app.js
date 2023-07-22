import express from "express";
import { APP_PORT } from "./src/config/constants.js";
import { connectDB } from "./src/config/database.js";
import { logger } from "./src/utils/logging.js";

const app = express();
app.use(express.json());

connectDB();

app.listen(APP_PORT, () => {
    logger.info(`Server is listening on port ${APP_PORT}`);
});