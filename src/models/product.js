import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 80 },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);