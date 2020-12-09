import React from 'react';
import Input from '../common/Input';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';
import Button from '../styledComponents/StyledButton';

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

export default RegisterForm;
