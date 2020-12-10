import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import UserVisitItem from '../items/UserVisitItem';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
`;

const UserVisitsList = ({ users }) => (
  <StyledUl>
    {!users || users.length === 0 ? (
      <li>Finner ingen brukere for øyeblikket, prøv igjen senere</li>
    ) : (
      users.map((user, index) => <UserVisitItem key={index} user={user} />)
    )}
  </StyledUl>
);

UserVisitsList.propTypes = {
  users: array.isRequired,
};

export default UserVisitsList;
