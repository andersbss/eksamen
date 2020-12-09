import React, { useEffect } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ContactsLayout from '../../layouts/ContactsLayout';
import useFetch from '../../hooks/useFetch';

const Contacts = () => {
  const { error, loading, response } = useFetch('GET', 'contacts');

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <Jumbotron headerText="Contacts" />
      <ContactsLayout>
        <h2>CONTACTS</h2>
      </ContactsLayout>
    </>
  );
};

export default Contacts;
