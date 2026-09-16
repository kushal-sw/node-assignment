const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "A valid email is required",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  age: Joi.number().integer().min(1).max(120).required().messages({
    "number.base": "Age must be a number",
    "number.min": "Age must be a valid range",
    "number.max": "Age must be a valid range",
    "any.required": "Age is required",
  }),
  course: Joi.string().required().messages({
    "string.empty": "Course is required",
    "any.required": "Course is required",
  }),
});

module.exports = userSchema;