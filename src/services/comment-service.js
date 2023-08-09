import validate from '../utils/validation.js';
import ResponseError from '../utils/response-error.js';
import { createCommentValidation } from '../validations/comment-validation.js';
import Comment from '../models/comment.js';
import Video from '../models/video.js';

const create = async (request) => {
    const comment = validate(createCommentValidation, request);
    const videoId = comment.video;
    delete comment.video;
    const newComment = await Comment.create(comment);
    const video = await Video.findById(videoId);
    video.comments.push(newComment._id);
    await video.save();
    return newComment;
}

const remove = async (id) => {
    const comment = await Comment.findByIdAndRemove(id);
    if (!comment) {
        throw new ResponseError(404, 'Comment not found!');
    }
    return "OK";
}

export default {
    create, remove
}