import validate from '../utils/validation.js';
import { createVideoValidation, updateVideoValidation } from '../validations/video-validation.js';
import Video from '../models/video.js';
import ResponseError from '../utils/response-error.js';

const create = async (request) => {
    const video = validate(createVideoValidation, request);
    return await Video.create(video);
}

const getAll = async () => {
    return await Video.find();
}

const getById = async (id) => {
    const video = await Video.findById(id);
    if (!video) {
        throw new ResponseError(404, 'Video not found!');
    }
    return video;
}

const update = async (id, request) => {
    const video = validate(updateVideoValidation, request);
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