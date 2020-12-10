import React from 'react';
import { string, number, shape } from 'prop-types';
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

const UserVisitItem = ({ user }) => (
  <StyledLi>
    <h3>
      {user.firstName} {user.lastName}
    </h3>
    <p>{user.email}</p>
    <p>Leste artikler: {user.count}</p>
  </StyledLi>
);

UserVisitItem.propTypes = {
  user: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    email: string.isRequired,
  }),
};

export default UserVisitItem;
