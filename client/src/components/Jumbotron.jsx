import React from 'react';
import styled from 'styled-components';
import LargeTitle from './titles/LargeTitle';

const StyledHeader = styled.header`
  margin: 0;
  width: 100%;
  padding: 80px;
  background-color: #d1d1d1;
`;

const Jumbotron = ({ headerText }) => (
  <StyledHeader>
    <LargeTitle content={headerText} />
  </StyledHeader>
);
export default Jumbotron;
