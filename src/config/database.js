import mongoose from "mongoose";
import { logger } from "../utils/logging.js";
import { MONGO_URI } from "./constants.js";
import Video from '../models/video.js';
import fs from 'fs';
import Product from '../models/product.js';
import Comment from '../models/comment.js';

export const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (e) => {
        logger.error(e);
    });
    db.once("connected", async () => {
        logger.info("Database connected!");
        if (await Video.countDocuments().exec() == 0) {
            const productJson = JSON.parse(fs.readFileSync('./src/resources/product.json', 'utf8'));
            const products = await Product.create(productJson);
            const commentJson = JSON.parse(fs.readFileSync('./src/resources/comment.json', 'utf8'));
            const comments = await Comment.create(commentJson);
            const videoJson = JSON.parse(fs.readFileSync('./src/resources/video.json', 'utf8'));
            await Video.create(videoJson.map(v => {
                v.products = products.map(p => p._id);
                v.comments = comments.map(c => c._id);
                return v;
            }));
        }
    });
}