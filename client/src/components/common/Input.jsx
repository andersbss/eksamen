import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.span`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 3px;

  & > input {
    height: 50px;
    font-size: 2em;
    border-radius: 5px;
    border: solid grey 2px;
    color: ${(props) => props.theme.colors.black};
    padding: 5px;

    ::placeholder {
      font-size: 1em;
    }
  }
`;

const StyledLabelContainer = styled.span`
  display: flex;
  justify-content: space-between;
  height: 10px;
  line-height: 0px;

  & > label {
    color: black;
    font-size: 1.8em;
    font-weight: 600;
    vertical-align: middle;

    &:nth-child(2) {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.red};
    }
  }
`;

const Input = ({
  label = '',
  errorLabel = '',
  type = '',
  name,
  maxLength = '',
  placeholder = '',
  required = false,
  value,
  onChange = () => {},
}) => (
  <StyledContainer>
    <StyledLabelContainer>
      <label>{label}</label>
      {errorLabel && <label>{errorLabel}</label>}
    </StyledLabelContainer>
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
      name={name}
      value={value}
    />
  </StyledContainer>
);
export default Input;
