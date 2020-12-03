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
    email: Joi.string().required().email().messages({
      'any.required': 'Email is required',
      'string.email': 'Invalid email',
    }),
    password: Joi.string()
      .required()
      .min(8)
      .regex(ONE_DIGIT_REGEX, { name: 'digit' })
      .regex(ONE_LOWERCASE_REGEX, { name: 'lowercase' })
      .regex(ONE_UPPERCASE_REGEX, { name: 'uppercase' })
      .regex(ONE_SPECIAL_CHARACTER, { name: 'special' })
      .meta({ _mongoose: { select: false } })
      .messages({
        'string.min': 'Password has to be at least 8 characters',
      }),
  })
  .options({ abortEarly: false });

// export const OBJECT_ID_REGEX = /^[0-9a-fA-F]{24}$/;
// export const ONE_DIGIT_REGEX = /(?=.*[0-9])/;
// export const ONE_LOWERCASE_REGEX = /(?=.*[a-z])/;
// export const ONE_UPPERCASE_REGEX = /(?=.*[A-Z])/;
// export const ONE_SPECIAL_CHARACTER = /(?=.*[!@#$%^&*])/;
// export const EIGHT_CHARACTERS_OR_MORE_REGEX = /(?=.{8,})/;
