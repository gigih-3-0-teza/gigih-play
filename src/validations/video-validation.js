import Joi from "joi";

const createVideoValidation = Joi.object({
    title: Joi.string().required(),
    thumbnail: Joi.string().required(),
    description: Joi.string(),
    urlEmbed: Joi.string().required(),
});

const updateVideoValidation = Joi.object({
    title: Joi.string(),
    thumbnail: Joi.string(),
    description: Joi.string(),
    urlEmbed: Joi.string(),
});

export { createVideoValidation, updateVideoValidation };