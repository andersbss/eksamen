import Joi from 'joi';

export const categorySchema = Joi.object().keys({
  title: Joi.string()
    .required()
    .max(50)
    .meta({ _mongoose: { trim: true } })
    .messages({
      'any.required': 'Title is required',
      'string.empty': 'Title is required',
      'string.max': 'Title cannot be longer than 100 characters',
    }),
});
