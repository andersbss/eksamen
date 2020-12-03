import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form``;

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledForm onSubmit={(e) => handleLogin(e, email, password)}>
      <h1>TEST</h1>
      <input placeholder="Epost" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Passord"
        type="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Logg inn</button>
    </StyledForm>
  );
};

export default LoginForm;
