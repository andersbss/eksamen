import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.span`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 3px;

  & > label {
    color: black;
    font-size: 1.8em;
    font-weight: 600;
  }

  & > input {
    font-size: 2em;
    border-radius: 5px;
    border: solid grey 2px;
    color: ${(props) => props.theme.colors.black};
    padding: 5px;
  }
`;

const Input = ({
  label,
  type = '',
  maxLength = '',
  placeholder = '',
  required = false,
  onChange = () => {},
}) => (
  <StyledContainer>
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
    />
  </StyledContainer>
);

export default Input;
