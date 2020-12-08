import React from 'react';
import styled from 'styled-components';

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
      users.map((user) => <li>{user.email}</li>)
    )}
  </StyledUl>
);

export default UserVisitsList;
