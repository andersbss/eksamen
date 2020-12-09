const validate = (inputs) => {
  const { email, name, message } = inputs;
  const errors = {};

  if (!email) errors.email = 'Fyll inn epost';
  else if (!email.match(/\S+@\S+\.\S+/)) {
    errors.email = 'Ugyldig e-postadresse';
  }

  if (!name?.replace(/\s/g, '')) errors.name = 'Fyll inn navn';

  if (!message?.replace(/\s/g, '')) errors.message = 'Fyll inn melding';

  return errors;
};

export default validate;
