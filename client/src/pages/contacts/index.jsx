import React, { useEffect } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ContactsLayout from '../../layouts/ContactsLayout';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import ContactList from '../../components/lists/ContactList';

const Contacts = () => {
  const { error, loading, response } = useFetch('GET', 'contacts');

  return (
    <>
      <Jumbotron headerText="Meldinger" top="70" bottom="0" />
      <ContactsLayout>
        {loading && <Loader />}
        {!loading && !error && <ContactList contacts={response} />}
      </ContactsLayout>
    </>
  );
};

export default Contacts;
