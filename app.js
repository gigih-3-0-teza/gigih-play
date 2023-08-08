import express from "express";
import { APP_PORT } from "./src/config/constants.js";
import { connectDB } from "./src/config/database.js";
import { logger } from "./src/utils/logging.js";
import router from "./src/routes/router.js";
import errorMiddleware from "./src/middleware/error-middleware.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(APP_PORT, () => {
    logger.info(`Server is listening on port ${APP_PORT}`);
});
connectDB();