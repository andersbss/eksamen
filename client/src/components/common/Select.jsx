import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.span`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 3px;
  & > label {
    color: black;
    font-size: 1.8rem;
    font-weight: 600;
  }
  & > select {
    height: 50px;
    font-size: 2rem;
    border-radius: 5px;
    border: solid grey 2px;
    color: ${(props) => props.theme.colors.black};
    padding: 5px;
    ::placeholder {
      font-size: 1em;
    }
  }
`;

export const StyledErrorLabel = styled.label``;

const Select = ({ name, onChange, label, errorLabel, children }) => (
  <StyledContainer>
    <label>{label}</label>
    {errorLabel && <StyledErrorLabel>{errorLabel}</StyledErrorLabel>}
    <select name={name} required onChange={onChange}>
      {children}
    </select>
  </StyledContainer>
);

export default Select;
