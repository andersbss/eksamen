import validate from '../utils/validationFormatter.js';

const isValidated = (schema) => async (req, res, next) => {
  if (!(await validate(schema, req.body, res))) next();
};

export default isValidated;
