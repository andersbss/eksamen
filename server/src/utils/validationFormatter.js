import { ONE_DIGIT_REGEX, ONE_LOWERCASE_REGEX, ONE_SPECIAL_CHARACTER, ONE_UPPERCASE_REGEX } from '../constants/regexes';
import response from './response.js';

const validateInput = async (schema, input) => {
  try {
    return await schema.validateAsync({ ...input });
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') console.log(error.details.map((detail) => detail));
    return error;
  }
};

const formatRegexErrors = (error) => {
  if (!error.context.regex) return error;
  if (error.type === 'string.pattern.base') return error;

  switch (error.context.regex) {
    case ONE_DIGIT_REGEX:
      error.message = 'Password has to include at least 1 digit';
      break;
    case ONE_LOWERCASE_REGEX:
      error.message = 'Password has to include at least on lowercase character';
      break;
    case ONE_UPPERCASE_REGEX:
      error.message = 'Password has to include at least on uppercase character';
      break;
    case ONE_SPECIAL_CHARACTER:
      error.message = 'Password has to include at least one special character';
      break;
    default:
      error.message = 'Invalid input';
  }
  return error;
};

// This needs some work
const validationFormatter = async (schema, input, res) => {
  let validation = await validateInput(schema, input);
  if (validation.isJoi && Array.isArray(validation.details) && validation.details.length > 0) {
    validation = validation.details.map((err) => formatRegexErrors(err));
    const validationMessage = validation.map((err) => err.message);
    return response(res, 400, false, validationMessage);
  }
  return false;
};

export default validationFormatter;
