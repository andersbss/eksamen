import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import ContactItem from '../items/ContactItem';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
`;

const ContactList = ({ contacts }) => (
  <StyledUl>
    {!contacts || contacts.length === 0 ? (
      <li>Finner ingen meldinger for øyeblikket, prøv igjen senere</li>
    ) : (
      contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))
    )}
  </StyledUl>
);

ContactList.propTypes = {
  contacts: array.isRequired,
};

export default ContactList;
