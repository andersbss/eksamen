const validate = (inputs) => {
  const { firstName, lastName, email, password } = inputs;
  const errors = {};

  if (!firstName?.replace(/\s/g, '')) errors.firstName = 'Fyll inn fornavn';

  if (!lastName?.replace(/\s/g, '')) errors.lastName = 'Fyll inn etternavn';

  if (!email) errors.email = 'Fyll inn epost';
  else if (!email.match(/\S+@\S+\.\S+/)) {
    errors.email = 'Ugyldig e-postadresse';
  }

  if (!password?.replace(/\s/g, '')) errors.password = 'Fyll inn passord';
  else if (password.length < 3)
    errors.password = 'Passord må være minst tre tegn';
  else if (!password.match(/(?=.*[0-9])/)) {
    errors.password = 'Passord må inneholde minst ett nummer';
  }

  return errors;
};

export default validate;
