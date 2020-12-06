import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr 1fr 1fr auto auto;
  & > * {
  }
`;

const initialFormData = Object.freeze({
  title: '',
  ingress: '',
  content: '',
  category: '',
  author: '',
  public: 'false',
});

const ArticleForm = ({ id, article }) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createError, setCreateError] = useState();

  // Image
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [imageSuccess, setImageSuccess] = useState(false);
  const [imageId, setImageId] = useState('');

  // Input errors
  const [titleError, setTitleError] = useState('Fyll ut tittel');
  const [ingressError, setIngressError] = useState('Fyll ut ingress');
  const [contentError, setContentError] = useState('Fyll ut innhold');
  const [categoryError, setCategoryError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (article !== null) {
      const autoFillData = {
        title: article.title,
        ingress: article.ingress,
        content: article.content,
        category: article.category._id,
        author: article.author._id,
      };
      updateFormData(autoFillData);
      setDisabled(false);
      setTitleError(false);
      setIngressError(false);
      setContentError(false);
      console.log(article);
    }
  }, [article]);

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
      [e.target.name]: e.target.value,
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
      setImageSuccess(true);
      setError(null);
      setImageId(data?.data?._id);
    } else {
      setError(data.data);
      setImageSuccess(false);
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
        if (imageId !== '') {
          formData.image = imageId;
        }
        setLoading(true);
        if (!article) {
          const {
            data: { success, data },
          } = await request('POST', '/articles', formData);

          if (success) {
            setIsCreated(true);
            setLoading(false);
            setDisabled(true);
            setTimeout(() => history.push('/fagartikler'), 2000);
          } else {
            setCreateError(data);
            setLoading(false);
          }
        } else {
          console.log(formData);
          const {
            data: { success, data },
          } = await request('PUT', `/articles/${article.id}`, formData);

          if (success) {
            setIsCreated(true);
            setLoading(false);
            setDisabled(true);
            setTimeout(() => history.push('/fagartikler'), 2000);
          } else {
            setCreateError(data);
            setLoading(false);
          }
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
          value={formData.title}
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
          value={formData.ingress}
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
          value={formData.content}
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
            {!article && <option value={null}>Velg kategori</option>}
            {article && (
              <option value={article.category._id} selected="selected">
                {article.category.title}
              </option>
            )}
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
            {!article && <option value={null}>Velg forfatter</option>}
            {article && (
              <option value={article.author._id} selected="selected">
                {article.author.firstName}
              </option>
            )}
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
        <Select name="public" label="Tilgang" onChange={handleChange}>
          <option value="false">Private</option>
          <option value="true">Public</option>
        </Select>
        <Button
          content={id ? 'Edit' : 'Create'}
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
        success={imageSuccess}
        imageId={imageId}
      />
    </StyledFormContainer>
  );
};

export default ArticleForm;
