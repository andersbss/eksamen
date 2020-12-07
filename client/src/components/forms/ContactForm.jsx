import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 20px;
  & > button {
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const StyledSuccessMessage = styled.span`
  text-align: center;
  & > p {
    font-weight: 800;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const ContactForm = ({
  handleSubmit,
  loading,
  submitSuccess,
  error,
  userEmail,
  userName,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setEmail(userEmail);
    setName(userName);
  }, [userEmail, userName]);

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, email, name, message)}>
      <Input
        label="Epost"
        placeholder="Epost"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Navn"
        placeholder="Navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        label="Melding"
        placeholder="Melding"
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <p>{error}</p>}
      {!submitSuccess ? (
        <Button
          type="submit"
          content={loading ? 'Sender melding...' : 'Send'}
          backgroundColor="blue"
          color="white"
          disabled={loading}
        />
      ) : (
        <StyledSuccessMessage>
          <p>Meldingen er sendt!</p>
          <p>Omdirigerer...</p>
        </StyledSuccessMessage>
      )}
    </StyledForm>
  );
};

export default ContactForm;
