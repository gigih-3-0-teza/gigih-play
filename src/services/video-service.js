import validate from '../utils/validation.js';
import { createVideoValidation, updateVideoValidation } from '../validations/video-validation.js';
import Video from '../models/video.js';
import ResponseError from '../utils/response-error.js';

const create = async (request) => {
    const video = validate(createVideoValidation, request);
    return await Video.create(video);
}

const getAll = async (search) => {
    if (search) {
        return await Video.find({ title: { $regex: search, $options: 'i' } });
    }
    return await Video.find();
}

const getById = async (id) => {
    const video = await Video.findById(id).populate('products').populate('comments');
    if (!video) {
        throw new ResponseError(404, 'Video not found!');
    }
    return video;
}

const update = async (id, request) => {
    const video = validate(updateVideoValidation, request);
    video.updatedAt = Date.now();
    const updated = await Video.findByIdAndUpdate(id, video);
    if (!updated) {
        throw new ResponseError(404, 'Video not found!');
    }
    return updated;
}

const remove = async (id) => {
    const video = await Video.findByIdAndRemove(id);
    if (!video) {
        throw new ResponseError(404, 'Video not found!');
    }
    return "OK";
}

export default {
    create, getAll, getById, update, remove
}