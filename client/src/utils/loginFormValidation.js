const validate = (inputs) => {
  const { email, password } = inputs;
  const errors = {};

  if (!email) errors.email = 'Fyll inn epost';
  else if (!email.match(/\S+@\S+\.\S+/)) {
    errors.email = 'Ugyldig e-postadresse';
  }

  if (!password?.replace(/\s/g, '')) errors.password = 'Fyll inn passord';

  return errors;
};

export default validate;
