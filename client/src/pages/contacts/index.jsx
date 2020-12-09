import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ContactsLayout from '../../layouts/ContactsLayout';

const Contacts = () => (
  <>
    <Jumbotron headerText="Contacts" />
    <ContactsLayout>
      <h2>CONTACTS</h2>
    </ContactsLayout>
  </>
);

export default Contacts;
