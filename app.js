import express from "express";
import { APP_PORT } from "./src/config/constants.js";

const app = express();
app.use(express.json());

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});