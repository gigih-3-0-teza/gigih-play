import videoService from '../services/video-service.js';

const create = async (req, res, next) => {
    try {
        const result = await videoService.create(req.body);
        res.status(201).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    const search = req.query.search;
    try {
        const result = await videoService.getAll(search);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const getById = async (req, res, next) => {
    try {
        const result = await videoService.getById(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const result = await videoService.update(req.params.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await videoService.remove(req.params.id);
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