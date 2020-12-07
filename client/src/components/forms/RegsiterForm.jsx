import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import Input from '../common/Input';
import validate from '../../utils/registerFormValidation';

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 20px;

  & > button {
    margin: auto;
  }
`;

const RegisterForm = ({ handleSubmit, handleChange, errors, hasErrors }) => {
  console.log('render');

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="firstName"
        label="Fornavn"
        errorLabel={errors?.firstName}
        onChange={handleChange}
      />
      <Input
        name="lastName"
        label="Etternavn"
        errorLabel={errors?.lastName}
        onChange={handleChange}
      />
      <Input
        name="email"
        label="E-post"
        errorLabel={errors?.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        label="Passord"
        errorLabel={errors?.password}
        onChange={handleChange}
      />
      <Button
        disabled={hasErrors}
        content="Registrer"
        type="submit"
        backgroundColor="blue"
        color="white"
      />
    </StyledForm>
  );
};

export default RegisterForm;
