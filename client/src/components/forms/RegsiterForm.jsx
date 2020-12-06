import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import validate from '../../utils/registerFormValidation';
import useForm from '../../hooks/useForm';
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
  const [inputs, errors, handleChange, handleSubmit] = useForm(
    handleRegister,
    validate
  );

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="firstName" label="Fornavn" onChange={handleChange} />
      <Input name="lastName" label="Etternavn" onChange={handleChange} />
      <Input name="email" label="E-post" onChange={handleChange} />
      <Input name="password" label="Passord" onChange={handleChange} />
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
