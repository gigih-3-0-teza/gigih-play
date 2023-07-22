import validate from '../utils/validation.js';
import { createProductValidation, updateProductValidation } from '../validations/product-validation.js';
import Product from '../models/product.js';
import ResponseError from '../utils/response-error.js';
import { Types } from 'mongoose';

const create = async (request) => {
    const product = validate(createProductValidation, request);
    return await Product.create(product);
}

const getAll = async (videoId) => {
    const id = new Types.ObjectId(videoId);
    return await Product.find({ video: id });
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