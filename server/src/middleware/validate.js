import validationExecutor from '../utils/validationFormatter.js';

const validate = (schema) => async (req, res, next) => {
  if (!(await validationExecutor(schema, req.body, res))) next();
};

export default validate;
