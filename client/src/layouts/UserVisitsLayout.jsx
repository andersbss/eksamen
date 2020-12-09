import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 80px;
  width: 400px;

  display: grid;
  grid-row-gap: 20px;
`;

const UserVisitsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default UserVisitsLayout;
