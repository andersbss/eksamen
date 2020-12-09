import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
  padding: 10px;
`;

const ContactItem = ({ contact }) => {
  <StyledLi>
    <h3>{contact.name}</h3>
    <p>{contact.email}</p>
    <p>{contact.message}</p>
  </StyledLi>;
};

export default ContactItem;
