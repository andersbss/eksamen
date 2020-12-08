import Joi from 'joi';
import { OBJECT_ID_REGEX } from '../constants/regexes';

export const userLogSchema = Joi.object()
  .keys({
    article: Joi.string()
      .required()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'Article' } })
      .messages({
        'string.pattern.base': 'Article id is not valid',
      }),
  })
  .options({ abortEarly: false });
