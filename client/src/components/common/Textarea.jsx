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
  & > textarea {
    height: 50px;
    font-size: 2em;
    border-radius: 5px;
    border: solid grey 2px;
    color: ${(props) => props.theme.colors.black};
    padding: 5px;
    resize: none;
    height: 130px;

    ::placeholder {
      font-size: 1em;
    }
  }
`;
// MÅ POSISJONERE TIL HØYRE OSV (for de som ikke hater css)
const StyledErrorLabel = styled.label``;

const Textarea = ({
  label,
  errorLabel,
  name,
  maxLength = '',
  placeholder = '',
  rows,
  cols,
  required = false,
  value,
  onChange = () => {},
}) => (
  <StyledContainer>
    <label>{label}</label>
    {errorLabel && <StyledErrorLabel>{errorLabel}</StyledErrorLabel>}
    <textarea
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
      name={name}
      rows={rows}
      cols={cols}
      value={value}
    />
  </StyledContainer>
);
export default Textarea;
