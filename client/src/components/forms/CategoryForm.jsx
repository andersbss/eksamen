import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../buttons/Button';

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
  success,
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
    <Button
      type="submit"
      content={loading ? 'Oppretter kategori...' : 'OPPRETT'}
      backgroundColor="blue"
      color="white"
      disabled={loading || hasErrors}
    />
    {error && <p>Noe gikk galt, prøv igjen</p>}
  </StyledForm>
);

export default CategoryForm;
