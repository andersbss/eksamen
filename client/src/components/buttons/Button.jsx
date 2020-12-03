import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  border: 0;

  height: 100px;
  width: 200px;
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const Button = ({ content, onClick, disabled }) => {
  console.log();
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {content}
    </StyledButton>
  );
};

export default Button;
