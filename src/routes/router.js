import { Router } from "express";
import videoController from "../controllers/video-controller.js";

const router = Router();

// Video API
router.post("/videos", videoController.create);
router.get("/videos", videoController.getAll);
router.get("/videos/:id", videoController.getById);
router.put("/videos/:id", videoController.update);
router.delete("/videos/:id", videoController.remove);

export default router;