import React from 'react';
import styled from 'styled-components';
import DefaultFormTypes from './types/Default';
import Input from '../common/Input';
import Button from '../styledComponents/StyledButton';

const StyledForm = styled.form`
  width: 600px;
  height: 100px;

  & > button {
    float: right;
  }

  & > span {
    width: 600px;
    margin-bottom: 20px;
  }
`;

const CategoryForm = ({
  handleSubmit,
  handleChange,
  errors,
  hasErrors,
  loading,
  error,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <Input
      name="title"
      label="Ny kategori"
      placeholder="Tittel"
      errorLabel={errors?.title}
      onChange={handleChange}
    />
    <Button primary="true" type="submit" disabled={loading || hasErrors}>
      {loading ? 'Oppretter kategori...' : 'OPPRETT'}
    </Button>
    {error && (
      <p>{`Oppretting feilet, prøv igjen. (${
        Array.isArray(error) ? error[0] : error
      })`}</p>
    )}
  </StyledForm>
);

CategoryForm.propTypes = {
  ...DefaultFormTypes,
};

export default CategoryForm;
