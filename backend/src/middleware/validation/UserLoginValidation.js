import Joi from "joi";

export const loginValidationSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});