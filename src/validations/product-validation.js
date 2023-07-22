import Joi from "joi";

const createProductValidation = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    link: Joi.string().required(),
    video: Joi.string().required(),
});

const updateProductValidation = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    link: Joi.string().required(),
    video: Joi.string().required(),
});

export { createProductValidation, updateProductValidation };