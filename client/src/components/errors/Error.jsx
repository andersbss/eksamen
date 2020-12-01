import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  width: 220px;
  height: 80px;
  text-align: center;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.darkGreen};

  & > p {
    color: white;
    &:nth-child(2) {
      font-size: 1.5em;
    }
  }
`;

const Error = ({ error }) => {
  console.log(error);
  return <StyledError>{error}</StyledError>;
};

export default Error;
