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

export const registerValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match.",
    "any.required": "Confirm password is required.",
  }),
});
