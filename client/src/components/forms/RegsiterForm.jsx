import React from 'react';
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

const RegisterForm = (
  handleRegister,
  setFirstName,
  setLastName,
  setEmail,
  setPassword
) => (
  <StyledForm>
    <Input label="Fornavn" />
    <Input label="Etternavn" />
    <Input label="E-post" />
    <Input label="Passord" />
    <Button
      content="Registrer"
      type="submit"
      backgroundColor="blue"
      color="white"
    />
  </StyledForm>
);

export default RegisterForm;
