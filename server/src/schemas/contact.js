import Joi from 'joi';

export const contactSchema = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .max(200)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'Name is required',
        'string.empty': 'Name is required',
        'string.max': 'Name cannot be longer than 200 characters',
      }),
    message: Joi.string()
      .required()
      .max(400)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'message is required',
        'string.empty': 'message is required',
        'string.max': 'message cannot be longer than 400 characters',
      }),
  })
  .options({ abortEarly: false });
