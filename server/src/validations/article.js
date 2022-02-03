import joi from "joi";

export const createArticleSchema = joi.object().keys({
  title: joi.string().required().min(3),
  content: joi.string().required().min(6),
  imageUrl: joi.string().required().min(3),
});

export const updateArticleSchema = joi.object().keys({
  title: joi.string().required().min(3),
  content: joi.string().required().min(6),
  imageUrl: joi.string().required().min(3),
});
