import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Select from '../common/Select';
import Error from '../errors/Error';
import useFetch from '../../hooks/useFetch';
import inputValidation from '../../utils/formValidation';
import Input from '../common/Input';
import Loader from '../animations/Loader';
import Textarea from '../common/Textarea';
import { request } from '../../services/httpService';

const StyledFormContainer = styled.main`
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr 1fr 1fr;
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
    height: 130px;
  }
`;

const initialFormData = Object.freeze({
  title: '',
  ingress: '',
  content: '',
  category: '',
  author: '',
});

const ArticleForm = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(true);
  const [titleError, setTitleError] = useState(' ');
  const [ingressError, setIngressError] = useState(' ');
  const [contentError, setContentError] = useState(' ');

  const {
    error: categoryError,
    loading: categoryLoading,
    response: categories,
    isSuccess: categoryIsSuccess,
  } = useFetch('GET', '/categories');

  const {
    error: authorError,
    loading: authorLoading,
    response: authors,
    isSuccess: authorIsSuccess,
  } = useFetch('GET', '/authors');

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    switch (e.target.name) {
      case 'title':
        setTitleError(
          inputValidation(e.target.name, e.target.value, e.target.maxLength)
        );
        break;
      case 'ingress':
        setIngressError(
          inputValidation(e.target.name, e.target.value, e.target.maxLength)
        );
        break;
      case 'content':
        setContentError(
          inputValidation(e.target.name, e.target.value, e.target.maxLength)
        );
        break;
      default:
    }

    if (!(titleError && ingressError && contentError)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    request('POST', '/articles', formData);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Input
          label="Tittel"
          errorLabel={titleError}
          type="text"
          maxLength="50"
          placeholder="Tittel"
          required
          name="title"
          onChange={handleChange}
        />
        <Input
          label="Ingress"
          errorLabel={ingressError}
          type="text"
          maxLength="1000"
          placeholder="Ingress"
          required
          name="ingress"
          onChange={handleChange}
        />
        <Textarea
          label="Innhold"
          errorLabel={contentError}
          maxLength="3000"
          placeholder="Innhold"
          required
          name="content"
          rows="4"
          cols="50"
          onChange={handleChange}
        />
        <StyledLabel>
          Kategori
          {categoryLoading && <Loader />}
          {categoryIsSuccess && (
            <Select name="category" onChange={handleChange}>
              {categories.length <= 0 ? (
                <p>Ingen kategorier</p>
              ) : (
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))
              )}
            </Select>
          )}
          {!categoryIsSuccess && !categoryLoading && (
            <Error error={categoryError} />
          )}
        </StyledLabel>
        <StyledLabel>
          Forfatter
          {authorLoading && <Loader />}
          {authorIsSuccess && (
            <Select name="author" onChange={handleChange}>
              {authors.length <= 0 ? (
                <p>Ingen forfattere</p>
              ) : (
                authors.map((author) => {
                  const name = `${author.firstName} ${author.lastName}`;
                  return (
                    <option key={author._id} value={author._id}>
                      {name}
                    </option>
                  );
                })
              )}
            </Select>
          )}
          {!authorIsSuccess && !authorLoading && <Error error={authorError} />}
        </StyledLabel>
        <Button
          content="Create"
          disabled={disabled}
          backgroundColor="blue"
          color="white"
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ArticleForm;
