const validate = (inputs) => {
  const { firstName, lastName, email, password } = inputs;
  const errors = {};

  if (!firstName) errors.firstName = 'Fyll inn fornavn';
  if (!lastName) errors.lastName = 'Fyll inn etternavn';
  if (!email) errors.email = 'Fyll inn epost';
  if (!password) errors.password = 'Fyll inn passord';

  return errors;
};

export default validate;
