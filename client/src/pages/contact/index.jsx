import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ContactForm from '../../components/forms/ContactForm';
import validate from '../../utils/contactFormValidation';
import { request } from '../../services/httpService';
import { useUserContext } from '../../context/UserContext';
import useForm from '../../hooks/useForm';
import ContactLayout from '../../layouts/ContactLayout';

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const form = useForm(request, validate, ['POST', '/contacts']);
  const { loggedIn, user } = useUserContext();
  const history = useHistory();

  const {
    handleChange,
    handleSubmit,
    errors,
    hasErrors,
    loading,
    response,
  } = form;

  useEffect(() => {
    if (!response) return;
    const {
      data: { success, data },
    } = response;

    if (success) {
      setSubmitSuccess(success);
      setTimeout(() => history.push('/hjem'), 1500);
    } else {
      setError(data);
    }
  }, [history, response]);

  return (
    <>
      <Jumbotron headerText="Kontakt oss" top="70" bottom="0" />
      <ContactLayout>
        <ContactForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          hasErrors={hasErrors}
          loading={loading}
          error={error}
          submitSuccess={submitSuccess}
          userEmail={loggedIn ? user.email : ''}
          userName={loggedIn ? `${user.firstName} ${user.lastName}` : ''}
        />
      </ContactLayout>
    </>
  );
};
export default Contact;
