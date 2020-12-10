import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';
import formatDate from '../../utils/dateFormatter';

const StyledLi = styled.li`
  margin: 0;
  padding: 10px;
  box-shadow: 0px 5px 13px -11px #000000;

  & > p {
    &:nth-child(2) {
      font-weight: 800;
      font-size: 1.2rem;
    }
    &:nth-child(3) {
      font-size: 1.2rem;
    }
  }
`;

const ContactItem = ({ contact }) => (
  <StyledLi>
    <h3>{contact?.name}</h3>
    <p>{contact.email}</p>
    <p>Innsendt: {formatDate(contact.createdAt)}</p>
    <p>{contact.message}</p>
  </StyledLi>
);

ContactItem.propTypes = {
  contact: shape({
    name: string.isRequired,
    email: string.isRequired,
    createdAt: string.isRequired,
    message: string,
  }),
};

export default ContactItem;
