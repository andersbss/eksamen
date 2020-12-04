import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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
    cursor: default;
  }

  border: 0;

  height: 85px;
  width: 200px;

  cursor: pointer;
`;

const Button = ({ content, onClick, disabled, backgroundColor, color }) => {
  console.log();
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
