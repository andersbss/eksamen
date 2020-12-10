import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import Button from '../styledComponents/StyledButton';
import DefaultFormTypes from './types/Default';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import { StyledSuccessMessage } from '../styledComponents/StyledMessages';
import StyledForm from '../styledComponents/StyledForm';

const ContactForm = ({
  handleSubmit,
  handleChange,
  errors,
  hasErrors,
  loading,
  error,
  setInputs,
  submitSuccess,
  userEmail,
  userName,
}) => {
  const emailRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      [emailRef.current.name]: emailRef.current.value,
      [nameRef.current.name]: nameRef.current.value,
    }));
  }, [setInputs]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="email"
        reference={emailRef}
        label="Epost"
        errorLabel={errors?.email}
        placeholder="Epost"
        defaultValue={userEmail}
        onChange={handleChange}
      />
      <Input
        name="name"
        reference={nameRef}
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
      <Button
        primary="true"
        type="submit"
        disabled={loading || hasErrors || submitSuccess}
      >
        {loading ? 'Sender melding...' : 'SEND'}
      </Button>
      {submitSuccess && (
        <StyledSuccessMessage>
          <p>Meldingen er sendt!</p>
          <p>Omdirigerer...</p>
        </StyledSuccessMessage>
      )}
      {error && (
        <p>{`Innsending feilet, prøv igjen. (${
          Array.isArray(error) ? error[0] : error
        })`}</p>
      )}
    </StyledForm>
  );
};

ContactForm.propTypes = {
  ...DefaultFormTypes,
  userEmail: string,
  userName: string,
};

export default ContactForm;
