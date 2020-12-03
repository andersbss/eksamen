import response from './response.js';

const validateInput = async (schema, input) => {
  try {
    return await schema.validateAsync({ ...input });
  } catch (error) {
    console.log(error.details.map((detail) => detail.type));
    console.log(error.details.map((detail) => detail.message));
    return error;
  }
};

const validationFormatter = async (schema, input, res) => {
  const validation = await validateInput(schema, input);
  if (validation.isJoi && Array.isArray(validation.details) && validation.details.length > 0) {
    const validationMessage = validation.details.map((err) => err.message);

    return response(res, 400, false, validationMessage);
  }
  return false;
};

export default validationFormatter;
