import Joi from "joi";

const createCommentValidation = Joi.object({
    username: Joi.string().required().alphanum().min(3).max(30),
    comment: Joi.string().required().min(3).max(100),
    video: Joi.string().required(),
});

export { createCommentValidation };