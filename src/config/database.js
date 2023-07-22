import mongoose from "mongoose";
import { logger } from "../utils/logging.js";
import { MONGO_URI } from "./constants.js";

export const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (e) => {
        logger.error(e);
    });
    db.once("connected", () => {
        logger.info("Database connected!");
    });
}