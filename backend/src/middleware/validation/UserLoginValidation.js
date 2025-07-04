// import Joi from "joi";

// export const registerValidationSchema = Joi.object({
//   name: Joi.string().required(),
//   username: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
//   confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
//     "any.only": "Şifrələr uyğun deyil.",
//     "any.required": "Təsdiq şifrəsi tələb olunur.",
//   }),
// });

import Joi from "joi";

export const loginValidationSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});