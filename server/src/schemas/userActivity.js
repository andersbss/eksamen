import Joi from 'joi';
import { OBJECT_ID_REGEX } from '../constants/regexes';

export const userActivitySchema = Joi.object()
  .keys({
    user: Joi.string()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'User' } })
      .messages({
        'string.pattern.base': 'User id is not valid',
      }),
    article: Joi.string()
      .regex(OBJECT_ID_REGEX)
      .meta({ _mongoose: { type: 'ObjectId', ref: 'Article' } })
      .messages({
        'string.pattern.base': 'Article id is not valid',
      }),
  })
  .options({ abortEarly: false });
