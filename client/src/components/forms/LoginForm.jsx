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

const LoginForm = ({ handleLogin, loading }) => {
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
      <Button
        type="submit"
        content={loading ? 'LOGGER INN...' : 'LOGG INN'}
        backgroundColor="blue"
        color="white"
        disabled={loading}
      />
    </StyledForm>
  );
};

export default LoginForm;
