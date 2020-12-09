import React, { useState } from 'react';
import Input from '../common/Input';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';
import Button from '../styledComponents/StyledButton';

const LoginForm = ({ handleLogin, loading, loggedIn, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledForm onSubmit={(e) => handleLogin(e, email, password)}>
      <Input
        label="Epost"
        placeholder="Epost"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Passord"
        type="Password"
        placeholder="Passord"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>Innlogging feilet, prøv igjen</p>}
      {!loggedIn ? (
        <Button primary type="submit" disabled={loading}>
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
};

export default LoginForm;
