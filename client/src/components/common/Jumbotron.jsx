import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  width: 100%;
  padding: 80px;
  background-color: ${(props) => props.theme.colors.grey};

  & > h1 {
    margin-top: ${(props) => (props.top ? `${props.top}px` : '180px')};
    margin-bottom: ${(props) => (props.bottom ? `${props.bottom}px` : '140px')};
    text-align: center;
    padding: 0;
  }
`;

const Jumbotron = ({ headerText, top, bottom }) => (
  <StyledHeader top={top} bottom={bottom}>
    <h1>{headerText}</h1>
  </StyledHeader>
);
export default Jumbotron;
