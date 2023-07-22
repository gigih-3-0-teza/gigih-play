import commentService from "../services/comment-service.js";

const create = async (req, res, next) => {
    try {
        const result = await commentService.create(req.body);
        res.status(201).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const getAll = async (req, res, next) => {
    try {
        const result = await commentService.getAll(req.query.videoId);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await commentService.remove(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

export default {
    create, getAll, remove
}