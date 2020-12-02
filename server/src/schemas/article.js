import Joi from 'joi';
import { OBJECT_ID_REGEX } from '../constants/regexes.js';
import logErrors from '../utils/schemaErrorLogger.js';

export const articleSchema = Joi.object().keys({
  title: Joi.string().required().max(50).messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
    'string.max': 'Title cannot be longer than 50 characters',
  }),
  ingress: Joi.string().max(1000).messages({
    'string.max': 'Ingress cannot be longer than 1000 characters',
  }),
  content: Joi.string().max(3000).messages({
    'string.max': 'Content cannot be longer than 3000 characters',
  }),
  author: Joi.string()
    .required()
    .regex(OBJECT_ID_REGEX)
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Author' } })
    .messages({
      'any.required': 'Author is required',
      'string.pattern.base': 'Author id is not valid',
    }),
  category: Joi.string()
    .required()
    .regex(OBJECT_ID_REGEX)
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Category' } })
    .messages({
      'any.required': 'Category is required',
      'string.pattern.base': 'Category id is not valid',
    }),
  publisher: Joi.string()
    .required()
    .regex(OBJECT_ID_REGEX)
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Publisher' } })
    .messages({
      'any.required': 'Publisher is required',
      'string.pattern.base': 'Publisher id is not valid',
    }),
});

// logErrors(articleSchema);
