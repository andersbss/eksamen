import React from 'react';
import { bool } from 'prop-types';
import Input from '../common/Input';
import DefaultFormTypes from './types/Default';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';
import Button from '../styledComponents/StyledButton';

const RegisterForm = ({
  handleSubmit,
  handleChange,
  errors,
  hasErrors,
  loading,
  error,
  loggedIn,
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
    {error && (
      <p>{`Registrering feilet, prøv igjen.(${
        Array.isArray(error) ? error[0] : error
      })`}</p>
    )}
    {!loggedIn ? (
      <Button primary type="submit" disabled={loading || hasErrors}>
        {loading ? 'REGISTRERER...' : 'REGISTRER'}
      </Button>
    ) : (
      <StyledSuccessMessage>
        <p>Du er registrert!</p>
        <p>Omdirigerer...</p>
      </StyledSuccessMessage>
    )}
  </StyledForm>
);

RegisterForm.propTypes = {
  ...DefaultFormTypes,
  loggedIn: bool,
};

export default RegisterForm;
