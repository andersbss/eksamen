import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
`;

const UserVisitItem = ({ user }) => {
  console.log();

  return (
    <StyledLi>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.email}</p>
    </StyledLi>
  );
};

export default UserVisitItem;
