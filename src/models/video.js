import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 80 },
    thumbnail: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    urlEmbed: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Video", videoSchema);