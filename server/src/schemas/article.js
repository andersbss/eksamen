import Joi from 'joi';

export const articleSchema = Joi.object().keys({
  title: Joi.string().required().max(50).messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
    'string.max': 'Title cannot be longer than 50 digits',
  }),
  ingress: Joi.string().max(1000).messages({
    'string.max': 'Ingress cannot be longer than 1000 digits',
  }),
  content: Joi.string().max(3000).messages({
    'string.max': 'Content cannot be longer than 3000 digits',
  }),
  author: Joi.string()
    .required()
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Author' } })
    .messages({
      'any.required': 'Author is required',
    }),
  category: Joi.string()
    .required()
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Category' } })
    .messages({
      'any.required': 'Category is required',
    }),
  publisher: Joi.string()
    .required()
    .meta({ _mongoose: { type: 'ObjectId', ref: 'Publisher' } })
    .messages({
      'any.required': 'Publisher is required',
    }),
});
