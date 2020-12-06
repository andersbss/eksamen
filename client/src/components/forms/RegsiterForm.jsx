import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import Input from '../common/Input';

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 20px;

  & > button {
    margin: auto;
  }
`;

const RegisterForm = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('Fyll ut fornavn');
  const [lastNameError, setLastNameError] = useState('Fyll ut etternavn');
  const [emailError, setEmailError] = useState({
    empty: 'Fyll ut epost',
    invalid: 'Eikk gyldig e-postadresse',
  });
  const [passwordError, setPasswordError] = useState({
    short: 'Passord må minst ha 3 tegn',
    number: 'Passord må inneholde minst 1 tegn',
  });

  const handleOnFocus = () => {
    if (hasFocused) return;
  };

  return (
    <StyledForm
      onSubmit={(e) =>
        handleRegister(e, { firstName, lastName, email, password })
      }
    >
      <Input label="Fornavn" onChange={(e) => setFirstName(e.target.value)} />
      <Input label="Etternavn" onChange={(e) => setLastName(e.target.value)} />
      <Input label="E-post" onChange={(e) => setEmail(e.target.value)} />
      <Input label="Passord" onChange={(e) => setPassword(e.target.value)} />
      <Button
        content="Registrer"
        type="submit"
        backgroundColor="blue"
        color="white"
      />
    </StyledForm>
  );
};

export default RegisterForm;
