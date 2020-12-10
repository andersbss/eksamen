import { func, bool, string, object, array, oneOfType } from 'prop-types';

const FormTypes = {
  handleSubmit: func,
  handleChange: func,
  errors: object,
  hasErrors: bool,
  loading: bool,
  error: oneOfType([string, array]),
};

export default FormTypes;
