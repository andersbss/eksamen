import { func, bool, string, object, array, oneOfType } from 'prop-types';

const FormTypes = {
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  errors: object,
  hasErrors: bool,
  loading: bool,
  error: string,
};

export default FormTypes;
