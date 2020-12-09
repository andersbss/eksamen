import Joi from 'joi';
import { ONE_DIGIT_REGEX, ONE_LOWERCASE_REGEX, ONE_SPECIAL_CHARACTER, ONE_UPPERCASE_REGEX } from '../constants/regexes';

export const userSchema = Joi.object()
  .keys({
    firstName: Joi.string()
      .required()
      .max(100)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'First name is required',
        'string.empty': 'First name is required',
        'string.max': 'First name cannot be longer than 100 characters',
      }),
    lastName: Joi.string()
      .required()
      .max(100)
      .meta({ _mongoose: { trim: true } })
      .messages({
        'any.required': 'Last name is required',
        'string.empty': 'Last name is required',
        'string.max': 'Last name cannot be longer than 100 characters',
      }),
    email: Joi.string()
      .required()
      .email()
      .meta({ _mongoose: { unique: true } })
      .messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email',
      }),
    password: Joi.string()
      .required()
      .min(3)
      .regex(ONE_DIGIT_REGEX, { name: 'digit' })
      .meta({ _mongoose: { select: false } })
      .messages({
        'string.min': 'Password has to be at least 3 characters',
      }),
    role: Joi.string().valid('user', 'admin', 'superadmin').default('user').messages({
      // Remove andmin and superAdmin before handing in the exam
      'any.only': 'Invalid role',
    }),
  })
  .options({ abortEarly: false });
