import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  & > button:nth-child(2) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const ArticlesToggles = ({ isLoggedIn }) => {
  console.log();

  return (
    <StyledSection>
      <Button content="NY ARTIKKEL" backgroundColor="blue" color="white" />
      <Button content="SØK" />
      <Button content="FILTER" />
    </StyledSection>
  );
};

export default ArticlesToggles;
