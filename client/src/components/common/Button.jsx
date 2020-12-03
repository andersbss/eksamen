import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 0px;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  height: 40px;
  font-size: 1.4em;
  font-weight: bold;
  padding: 5px 15px 5px 15px;
  border-radius: 6px;
  display: block;
  margin: auto;
  color: black;
  width: 40%;
  cursor: pointer;

  transition: width 0.3s;

  &:hover {
    color: white;
    width: 50%;
  }

  &:disabled {
    opacity: 0.5;
    &:hover {
      color: black;
      width: 40%;
    }
  }
`;

const Button = ({ click, content, type, disabled = false }) => (
  <StyledButton onClick={click} type={type} disabled={disabled}>
    {content}
  </StyledButton>
);

export default Button;
