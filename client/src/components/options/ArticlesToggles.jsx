import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  & > button:nth-child(${(props) => (props.isAdmin ? 2 : 1)}) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const ArticlesToggles = ({ loggedIn, isAdmin }) => (
  <StyledSection isAdmin={isAdmin}>
    {loggedIn && isAdmin && (
      <Button content="NY ARTIKKEL" backgroundColor="blue" color="white" />
    )}
    <Button content="SØK" />
    <Button content="FILTER" />
  </StyledSection>
);

export default ArticlesToggles;
