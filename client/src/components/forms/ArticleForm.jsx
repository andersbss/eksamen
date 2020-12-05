import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
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
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  & > * {
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

  const [titleError, setTitleError] = useState('Fyll ut tittel');
  const [ingressError, setIngressError] = useState('Fyll ut ingress');
  const [contentError, setContentError] = useState('Fyll ut innhold');
  const [categoryError, setCategoryError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const {
    error: categoryFetchError,
    loading: categoryLoading,
    response: categories,
    isSuccess: categoryIsSuccess,
  } = useFetch('GET', '/categories');

  const {
    error: authorFetchError,
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
    if (e.target.name === 'category' && e.target.value !== '') {
      setCategoryError('');
    }
    if (e.target.name === 'author' && e.target.value !== '') {
      setAuthorError('');
    }

    if (titleError || ingressError || contentError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.author === '') {
      setAuthorError('Velg en forfatter');
    }
    if (formData.category === '') {
      setCategoryError('Velg en kategori');
    }
    if (formData.author !== '' && formData.category !== '') {
      request('POST', '/articles', formData);
    }
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
          required="true"
          name="title"
          onChange={handleChange}
        />
        <Input
          label="Ingress"
          errorLabel={ingressError}
          type="text"
          maxLength="1000"
          placeholder="Ingress"
          required="true"
          name="ingress"
          onChange={handleChange}
        />
        <Textarea
          label="Innhold"
          errorLabel={contentError}
          maxLength="3000"
          placeholder="Innhold"
          required="true"
          name="content"
          rows="4"
          cols="50"
          onChange={handleChange}
        />
        {categoryLoading && <Loader />}
        {categoryIsSuccess && (
          <Select
            name="category"
            label="Kategori"
            errorLabel={categoryError}
            onChange={handleChange}
          >
            <option value={null}>Velg kategori</option>
            {categories.length <= 0 ? (
              <p>Ingen kategorier</p>
            ) : (
              categories.map((category) => (
                <option value={category._id}>{category.title}</option>
              ))
            )}
          </Select>
        )}
        {!categoryIsSuccess && !categoryLoading && (
          <Error error={categoryFetchError} />
        )}
        {authorLoading && <Loader />}
        {authorIsSuccess && (
          <Select
            name="author"
            label="Forfatter"
            errorLabel={authorError}
            onChange={handleChange}
          >
            <option value={null}>Velg forfatter</option>
            {authors.length <= 0 ? (
              <p>Ingen forfattere</p>
            ) : (
              authors.map((author) => {
                const name = `${author.firstName} ${author.lastName}`;
                return <option value={author._id}>{name}</option>;
              })
            )}
          </Select>
        )}
        {!authorIsSuccess && !authorLoading && (
          <Error error={authorFetchError} />
        )}
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
