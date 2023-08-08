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
            const videoJson = JSON.parse(fs.readFileSync('./src/resources/video.json', 'utf8'));
            const video = await Video.create(videoJson.map(v => {
                v.createdAt = Date.now();
                v.updatedAt = Date.now();
                return v;
            }));
            const productJson = JSON.parse(fs.readFileSync('./src/resources/product.json', 'utf8'));
            const product = [];
            video.forEach(v => {
                productJson.forEach(p => {
                    p.video = v._id;
                    p.createdAt = Date.now();
                    p.updatedAt = Date.now();
                    product.push(p);
                });
            });
            await Product.create(product);
            const commentJson = JSON.parse(fs.readFileSync('./src/resources/comment.json', 'utf8'));
            const comment = [];
            video.forEach(v => {
                commentJson.forEach(c => {
                    c.video = v._id;
                    c.timestamp = Date.now();
                    comment.push(c);
                });
            });
            await Comment.create(comment);
        }
    });
}