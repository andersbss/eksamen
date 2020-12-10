import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${(props) => props.theme.fonts.sizes.button};
  font-weight: ${(props) => props.theme.fonts.weights.button};

  background-color: ${(props) =>
    props.backgroundColor === 'blue'
      ? props.theme.colors.blue
      : props.theme.colors.lightGrey};

  color: ${(props) =>
    props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.black};

  &:disabled {
    background-color: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.black};
    opacity: 0.5;
    cursor: default;
  }

  border: 0;

  height: 85px;
  width: 200px;

  cursor: pointer;
`;

// This is not being used. Every button is replaced with 'styledComponents/StyledButton'.
// We just dont want to break anything before handing in the exam. Just in case :)
const Button = ({ content, onClick, disabled, backgroundColor, color }) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    onClick={onClick}
    disabled={disabled}
  >
    {content}
  </StyledButton>
);

export default Button;
