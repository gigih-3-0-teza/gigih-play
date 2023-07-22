import validate from '../utils/validation.js';
import ResponseError from '../utils/response-error.js';
import { createCommentValidation } from '../validations/comment-validation.js';
import Comment from '../models/comment.js';
import { Types } from 'mongoose';

const create = async (request) => {
    const comment = validate(createCommentValidation, request);
    return await Comment.create(comment);
}

const getAll = async (videoId) => {
    const id = new Types.ObjectId(videoId);
    return await Comment.find({ video: id }).sort({ timestamp: -1 });
}

const remove = async (id) => {
    const comment = await Comment.findByIdAndRemove(id);
    if (!comment) {
        throw new ResponseError(404, 'Comment not found!');
    }
    return "OK";
}

export default {
    create, getAll, remove
}