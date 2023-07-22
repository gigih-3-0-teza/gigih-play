import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true, maxlength: 80 },
    comment: { type: String, required: true, trim: true },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);