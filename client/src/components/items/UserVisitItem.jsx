import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
  padding: 10px;
  margin-bottom: 25px;
  box-shadow: 0px 5px 13px -11px #000000;

  & > h3 {
    text-align: center;
    margin: 0;
  }

  & > p {
    margin: auto;
    text-align: center;
    font-size: 2rem;

    &:nth-child(2) {
      margin-bottom: 10px;
      font-size: 1.5rem;
    }
  }
`;

const UserVisitItem = ({ user }) => {
  console.log();

  return (
    <StyledLi>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.email}</p>
      <p>Leste artikler: {user.count}</p>
    </StyledLi>
  );
};

export default UserVisitItem;
