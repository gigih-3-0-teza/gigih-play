import validate from '../utils/validation.js';
import { createProductValidation, updateProductValidation } from '../validations/product-validation.js';
import Product from '../models/product.js';
import ResponseError from '../utils/response-error.js';
import Video from '../models/video.js';

const create = async (request) => {
    const product = validate(createProductValidation, request);
    const videoId = product.video;
    delete product.video;
    const newProduct = await Product.create(product);
    const video = await Video.findById(videoId);
    video.products.push(newProduct._id);
    await video.save();
    return newProduct;
}

const getAll = async () => {
    return await Product.find();
}

const getById = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new ResponseError(404, 'Product not found!');
    }
    return product;
}

const update = async (id, request) => {
    const product = validate(updateProductValidation, request);
    product.updatedAt = Date.now();
    const updated = await Product.findByIdAndUpdate(id, product);
    if (!updated) {
        throw new ResponseError(404, 'Product not found!');
    }
    return updated;
}

const remove = async (id) => {
    const product = await Product.findByIdAndRemove(id);
    if (!product) {
        throw new ResponseError(404, 'Product not found!');
    }
    return "OK";
}

export default {
    create, getAll, getById, update, remove
}