import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Select from '../common/Select';
import Error from '../errors/Error';
import useFetch from '../../hooks/useFetch';

const StyledFormContainer = styled.main`
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  & > * {
  }
`;

const StyledLabel = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  & > * {
    display: block;
    margin-bottom: 5px;
    border: solid 2px ${(props) => props.theme.colors.grey};
    border-radius: 5px;
    height: 50px;
    width: 100%;
  }

  & > textarea {
    resize: none;
  }
`;

const initialFormData = Object.freeze({
  title: '',
  ingress: '',
  content: '',
  published: '',
  category: '',
  author: '',
});

// tittel, ingress, innhold(textarea), dato, forfatter(nedtrekksliste), kategori(nedtrekksliste)
const ArticleForm = () => {
  const [formData, updateFormData] = useState(initialFormData);

  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    '/categories'
  );

  console.log(formData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledLabel>
          Tittel
          <input
            type="text"
            name="title"
            placeholder="Tittel"
            maxLength="50"
            required
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Ingress
          <input
            type="text"
            name="ingress"
            placeholder="Ingress"
            maxLength="1000"
            required
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Innhold
          <textarea
            name="content"
            placeholder="Innhold"
            maxLength="3000"
            required
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Publiseringsdato
          <input
            type="date"
            name="published"
            required
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Kategori
          {loading && <p>Loading...</p>}
          {isSuccess && (
            <Select name="category" onChange={handleChange}>
              {response.length <= 0 ? (
                <p>Ingen kategorier</p>
              ) : (
                response.map((category) => (
                  <option value={category.title}>{category.title}</option>
                ))
              )}
            </Select>
          )}
          {!isSuccess && !loading && <Error error={error} />}
        </StyledLabel>
        <StyledLabel>
          Forfatter
          <select name="author" required onChange={handleChange}>
            <option value={null}>Velg en forfatter</option>
            <option value="Lars Larsen">Lars Larsen</option>
            <option value="Gunn Gundersen">Gunn Gundersen</option>
            <option value="Simen Simensen">Simen Simensen</option>
          </select>
        </StyledLabel>
        <Button click={handleSubmit} content="Create" type="submit" />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ArticleForm;
