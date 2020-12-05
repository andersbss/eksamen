import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import ImageForm from './ImageForm';
import { upload } from '../../services/imageService';

const StyledFormContainer = styled.main`
  padding: 20px;
  width: 80%;
  margin: auto;
  & > form > img {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr 1fr auto auto;
  & > * {
  }
`;

const initialFormData = Object.freeze({
  title: '',
  ingress: '',
  content: '',
  category: '',
  author: '',
  image: '5fcb8b8bd895b528289723be',
});

const ArticleForm = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createError, setCreateError] = useState();

  // Image
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageId, setImageId] = useState(null);

  // Input errors
  const [titleError, setTitleError] = useState('Fyll ut tittel');
  const [ingressError, setIngressError] = useState('Fyll ut ingress');
  const [contentError, setContentError] = useState('Fyll ut innhold');
  const [categoryError, setCategoryError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const history = useHistory();

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

  const imageFormOnChange = (e) => {
    console.log(e);
    const imageFile = e.target.files[0];
    setFile(imageFile);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    console.log(data);

    if (data.success) {
      setSuccess(true);
      setError(null);
      setImageId(data?.data?._id);
    } else {
      setError(data.data);
      setSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.author === '') {
      setAuthorError('Velg en forfatter');
    }
    if (formData.category === '') {
      setCategoryError('Velg en kategori');
    }
    if (formData.author !== '' && formData.category !== '') {
      try {
        setLoading(true);
        const {
          data: { success, data },
        } = await request('POST', '/articles', formData);
        console.log(success);

        if (success) {
          setIsCreated(true);
          setLoading(false);
          setDisabled(true);
          setTimeout(() => history.push('/fagartikler'), 2000);
        } else {
          console.log(success);
          setCreateError(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setCreateError({ success: false, data: 'Unexpected error occurred' });
      }
    }
  };

  return (
    <StyledFormContainer>
      {isCreated && (
        <p>Artikkel publisert - Omdirigerer til fagartikkel-siden...</p>
      )}
      {createError && <p>Publisering av artikkel feilet</p>}
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
          content={loading ? 'Creating...' : 'Create'}
          disabled={disabled}
          backgroundColor="blue"
          color="white"
        />
      </StyledForm>
      <h4>Last opp bilde til artikkelen (valgfritt): </h4>
      <ImageForm
        handleSubmit={handleImageUpload}
        onChange={imageFormOnChange}
        error={error}
        success={success}
        imageId={imageId}
      />
    </StyledFormContainer>
  );
};

export default ArticleForm;
