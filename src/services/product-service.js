import validate from '../utils/validation.js';
import { createProductValidation, updateProductValidation } from '../validations/product-validation.js';
import Product from '../models/product.js';
import ResponseError from '../utils/response-error.js';

const create = async (request) => {
    const product = validate(createProductValidation, request);
    return await Product.create(product);
}

const getAll = async (videoId) => {
    return await Product.find({ videoId: videoId });
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
    console.log(product);
    const updated = await Product.findByIdAndUpdate(id, product);
    console.log(updated);
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