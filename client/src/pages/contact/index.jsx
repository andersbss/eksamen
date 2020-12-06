import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ContactForm from '../../components/forms/ContactForm';
import ContactLayout from '../../layouts/ContactLayout';
import { request } from '../../services/httpService';
import { useUserContext } from '../../context/UserContext';

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { loggedIn, user } = useUserContext();
  const history = useHistory();

  const handleSubmit = async (e, email, message) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {
        data: { success, data },
      } = await request('POST', '/contacts', { email, message });
      console.log(user);

      if (success) {
        setSubmitSuccess(success);
        setLoading(false);
        console.log(data);
        setTimeout(() => history.push('/hjem'), 2000);
      } else {
        console.log(data);
        setLoading(false);
        setError(data);
      }
    } catch (error) {
      setLoading(false);
      setError({ success: false, data: 'Unexpected error occurred' });
    }
  };

  return (
    <>
      <Jumbotron headerText="Kontakt oss" />
      <ContactLayout>
        <ContactForm
          handleSubmit={handleSubmit}
          loading={loading}
          error={error}
          submitSuccess={submitSuccess}
          userEmail={loggedIn ? user.email : ''}
        />
      </ContactLayout>
    </>
  );
};

export default Contact;
