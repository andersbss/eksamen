const validate = (inputs) => {
  const { category } = inputs;
  const errors = {};

  if (!category?.replace(/\s/g, '')) {
    errors.category = 'Fyll inn en kategoritittel';
  }
};

export default validate;
