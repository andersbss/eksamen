import React from 'react';
import { bool } from 'prop-types';
import DefaultFormTypes from './types/Default';
import Input from '../common/Input';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';
import Button from '../styledComponents/StyledButton';

const LoginForm = ({
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
      name="email"
      label="Epost"
      placeholder="Epost"
      errorLabel={errors?.email}
      onChange={handleChange}
    />
    <Input
      name="password"
      type="password"
      label="Passord"
      placeholder="Passord"
      errorLabel={errors?.password}
      onChange={handleChange}
    />
    {error && (
      <p>{`Innlogging feilet, prøv igjen.(${
        Array.isArray(error) ? error[0] : error
      })`}</p>
    )}
    {!loggedIn ? (
      <Button primary type="submit" disabled={loading || hasErrors}>
        {loading ? 'LOGGER INN...' : 'LOGG INN'}
      </Button>
    ) : (
      <StyledSuccessMessage>
        <p>Du er logget inn!</p>
        <p>Omdirigerer...</p>
      </StyledSuccessMessage>
    )}
  </StyledForm>
);

LoginForm.propTypes = {
  ...DefaultFormTypes,
  loggedIn: bool,
};

export default LoginForm;
