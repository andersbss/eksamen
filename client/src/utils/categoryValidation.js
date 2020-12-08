const validate = (inputs) => {
  const { title } = inputs;
  const errors = {};

  if (!title) {
    errors.title = 'Fyll inn en kategoritittel';
  }

  return errors;
};

export default validate;
