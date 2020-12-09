import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: ${(props) => props.theme.fonts.sizes.button};
  font-weight: ${(props) => props.theme.fonts.weights.button};
  height: 85px;
  width: 200px;

  color: ${(props) =>
    props.primary ? props.theme.colors.white : props.theme.colors.black};

  background-color: ${(props) =>
    props.primary ? props.theme.colors.blue : props.theme.colors.lightGrey};

  &:disabled {
    background-color: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.black};
    opacity: 0.5;
    cursor: default;
  }

  cursor: pointer;
`;

export default StyledButton;
