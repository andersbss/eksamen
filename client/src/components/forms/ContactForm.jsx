import React from 'react';
import Button from '../buttons/Button';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';

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
