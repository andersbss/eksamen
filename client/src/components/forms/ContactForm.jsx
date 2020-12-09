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
  color: green;
  & > p {
    font-weight: 800;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

export const StyledErrorMessage = styled.span`
  text-align: center;
  color: red;
  & > p {
    font-weight: 800;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const ContactForm = ({
  handleSubmit,
  handleChange,
  loading,
  submitSuccess,
  hasErrors,
  error,
  errors,
  userEmail,
  userName,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <Input
      name="email"
      label="Epost"
      errorLabel={errors?.email}
      placeholder="Epost"
      defaultValue={userEmail}
      onChange={handleChange}
    />
    <Input
      name="name"
      label="Navn"
      errorLabel={errors?.name}
      placeholder="Navn"
      defaultValue={userName}
      onChange={handleChange}
    />
    <Textarea
      name="message"
      label="Melding"
      errorLabel={errors?.message}
      placeholder="Melding"
      onChange={handleChange}
    />
    {error && (
      <p>{`Registrering feilet, prøv igjen.(${
        Array.isArray(error) ? error[0] : error
      })`}</p>
    )}
    {!submitSuccess ? (
      <Button
        type="submit"
        content={loading ? 'Sender melding...' : 'Send'}
        backgroundColor="blue"
        color="white"
        disabled={loading || hasErrors}
      />
    ) : (
      <StyledSuccessMessage>
        <p>Meldingen er sendt!</p>
        <p>Omdirigerer...</p>
      </StyledSuccessMessage>
    )}
  </StyledForm>
);

export default ContactForm;
