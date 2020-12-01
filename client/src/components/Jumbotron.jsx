import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  width: 100%;
  padding: 80px;
`;

const StyledHeaderText = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
`;

const Jumbotron = ({ headerText }) => (
  <StyledHeader>
    <StyledHeaderText>{headerText}</StyledHeaderText>
  </StyledHeader>
);
export default Jumbotron;
