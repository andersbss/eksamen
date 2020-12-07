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

const RegisterForm = ({ handleSubmit, handleChange, errors }) => (
  <StyledForm onSubmit={handleSubmit}>
    <Input name="firstName" label="Fornavn" onChange={handleChange} />
    <Input
      name="lastName"
      label="Etternavn"
      errorLabel={errors?.lastName}
      onChange={handleChange}
    />
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

export default RegisterForm;
