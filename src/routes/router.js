import { Router } from "express";
import videoController from "../controllers/video-controller.js";
import productController from "../controllers/product-controller.js";
import commentController from "../controllers/comment-controller.js";

const router = Router();

// Video API
router.post("/videos", videoController.create);
router.get("/videos", videoController.getAll);
router.get("/videos/:id", videoController.getById);
router.put("/videos/:id", videoController.update);
router.delete("/videos/:id", videoController.remove);

// Product API
router.post("/products", productController.create);
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);

// Comment API
router.post("/comments", commentController.create);
router.get("/comments", commentController.getAll);
router.delete("/comments/:id", commentController.remove);

export default router;