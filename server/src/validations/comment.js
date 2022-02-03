import joi from "joi";

export const commentSchema = joi.object().keys({
  name: joi.string().required().min(3),
  comment: joi.string().required().min(6),
});
