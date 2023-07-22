import productService from '../services/product-service.js';

const create = async (req, res, next) => {
    try {
        const result = await productService.create(req.body);
        res.status(201).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    try {
        const result = await productService.getAll(req.query.videoId);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const getById = async (req, res, next) => {
    try {
        const result = await productService.getById(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const result = await productService.update(req.params.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await productService.remove(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

export default {
    create, getAll, getById, update, remove
}