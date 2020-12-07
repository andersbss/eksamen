import Joi from 'joi';

export const contactSchema = Joi.object()
  .keys({
    message: Joi.string()
      .required()
      .max(400)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'message is required',
        'string.empty': 'message is required',
        'string.max': 'message cannot be longer than 400 characters',
      }),
    email: Joi.string().required().email().messages({
      'any.required': 'Email is required',
      'string.email': 'Invalid email',
    }),
    name: Joi.string()
      .required()
      .max(60)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'Name is required',
        'string.empty': 'Name is required',
        'string.max': 'Name cannot be longer than 60 characters',
      }),
  })
  .options({ abortEarly: false });
