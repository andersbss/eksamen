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

const StyledSuccessMessage = styled.span`
  text-align: center;

  & > p {
    font-weight: 800;

    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const RegisterForm = ({
  handleSubmit,
  handleChange,
  errors,
  hasErrors,
  loggedIn,
  loading,
  error,
}) => (
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
    {error && <p>Registrering feilet, prøv igjen</p>}
    {!loggedIn ? (
      <Button
        type="submit"
        content={loading ? 'REGISTRERER...' : 'REGISTRER'}
        backgroundColor="blue"
        color="white"
        disabled={loading || hasErrors}
      />
    ) : (
      <StyledSuccessMessage>
        <p>Du er registrert!</p>
        <p>Omdirigerer...</p>
      </StyledSuccessMessage>
    )}
  </StyledForm>
);

export default RegisterForm;
