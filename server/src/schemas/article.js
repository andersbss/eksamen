import Joi from 'joi';
import { OBJECT_ID_REGEX } from '../constants/regexes.js';

export const articleSchema = Joi.object()
  .keys({
    title: Joi.string()
      .required()
      .max(50)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'Title is required',
        'string.empty': 'Title is required',
        'string.max': 'Title cannot be longer than 50 characters',
      }),
    ingress: Joi.string().required().max(1000).messages({
      'any.required': 'Ingress is required',
      'string.empty': 'Ingress is required',
      'string.max': 'Ingress cannot be longer than 1000 characters',
    }),
    content: Joi.string().required().max(3000).messages({
      'any.required': 'Content is required',
      'string.empty': 'Content is required',
      'string.max': 'Content cannot be longer than 3000 characters',
    }),
    author: Joi.string()
      .required()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'Author', trim: true } })
      .messages({
        'any.required': 'Author is required',
        'string.empty': 'Author is required',
        'string.pattern.base': 'Author id is not valid',
      }),
    category: Joi.string()
      .required()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'Category' } })
      .messages({
        'any.required': 'Category is required',
        'string.empty': 'Category is required',
        'string.pattern.base': 'Category id is not valid',
      }),
    public: Joi.boolean().default(false).messages({
      'boolean.base': 'Public have to be true or false',
    }),
    image: Joi.string()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'Image' } })
      .messages({
        'string.pattern.base': 'Image id is not valid',
      }),
  })
  .options({ abortEarly: false });
