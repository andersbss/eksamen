import React from 'react';
import { string, bool, func } from 'prop-types';
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

const StyledLabelContainer = styled.span`
  display: flex;
  justify-content: space-between;
  height: 15px;
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
  defaultValue,
  onChange = () => {},
}) => (
  <StyledContainer>
    <StyledLabelContainer>
      <label>{label}</label>
      {errorLabel && <label>{errorLabel}</label>}
    </StyledLabelContainer>

    <textarea
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
      name={name}
      rows={rows}
      cols={cols}
      value={value}
      defaultValue={defaultValue}
    />
  </StyledContainer>
);

Textarea.propTypes = {
  label: string,
  errorLabel: string,
  name: string,
  maxLength: string,
  placeholder: string,
  rows: string,
  cols: string,
  required: bool,
  value: string,
  defaultValue: string,
  onChange: func,
};

export default Textarea;
