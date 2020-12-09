import React, { useState, useEffect } from 'react';
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
  width: 60%;
  margin: auto;
  padding-top: 100px;

  & > form > img {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const StyledForm = styled.form`
  display: grid;
  row-gap: 30px;
`;

const StyledSelectButtonContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > button {
    float: right;
    height: 50px;
    width: 80px;
    margin-top: 18px;
  }

  & > span {
    margin-right: 10px;
    width: 100%;
  }
`;

const StyledSuccessMessage = styled.span`
  text-align: center;
  color: green;
  & > p {
    font-weight: 800;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const ArticleForm = ({
  id,
  article,
  handleSubmit,
  handleChange,
  loading,
  submitSuccess,
  hasErrors,
  error,
  errors,
  handleModalToggle,
  articleLoading,
  authorFetchError,
  authorLoading,
  authors,
  authorIsSuccess,
  categoryFetchError,
  categoryFetchLoading,
  categories,
  categoryIsSuccess,
  imageFormOnChange,
  handleImageUpload,
  imageError,
  imageSuccess,
  imageId,
}) => {
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    if (article)
      setAuthorName(`${article.author.firstName} ${article.author.lastName}`);
  }, [article]);

  return (
    <StyledFormContainer>
      {articleLoading ? (
        <Loader />
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <Input
            label="Tittel"
            errorLabel={errors?.title}
            type="text"
            maxLength="50"
            placeholder="Tittel"
            required="true"
            name="title"
            defaultValue={article ? article.title : ''}
            onChange={handleChange}
          />
          <Input
            label="Ingress"
            errorLabel={errors?.ingress}
            type="text"
            maxLength="1000"
            placeholder="Ingress"
            required="true"
            name="ingress"
            defaultValue={article ? article.ingress : ''}
            onChange={handleChange}
          />
          <Textarea
            label="Innhold"
            errorLabel={errors?.content}
            maxLength="3000"
            placeholder="Innhold"
            required="true"
            name="content"
            defaultValue={article ? article.content : ''}
            rows="4"
            cols="50"
            onChange={handleChange}
          />
          {categoryFetchLoading && <Loader />}
          {categoryIsSuccess && (
            <StyledSelectButtonContainer>
              <Select
                name="category"
                label="Kategori"
                errorLabel={errors?.category}
                onChange={handleChange}
              >
                {!article && <option value={null}>Velg kategori</option>}
                {article && (
                  <option value={article.category._id} defaultValue>
                    {article.category.title}
                  </option>
                )}
                {categories.length <= 0 ? (
                  <p>Ingen kategorier</p>
                ) : (
                  categories.map((category) => {
                    if (article)
                      if (category._id === article.category._id) return null;
                    return (
                      <option value={category._id}>{category.title}</option>
                    );
                  })
                )}
              </Select>
              <Button
                content="NY"
                backgroundColor="blue"
                color="white"
                onClick={handleModalToggle}
              />
            </StyledSelectButtonContainer>
          )}
          {!categoryIsSuccess && !categoryFetchLoading && (
            <Error error={categoryFetchError} />
          )}
          {authorLoading && <Loader />}
          {authorIsSuccess && (
            <Select
              name="author"
              label="Forfatter"
              errorLabel={errors?.author}
              onChange={handleChange}
            >
              {!article && <option value={null}>Velg forfatter</option>}
              {article && (
                <option value={article.author._id} defaultValue>
                  {authorName}
                </option>
              )}
              {authors.length <= 0 ? (
                <p>Ingen forfattere</p>
              ) : (
                authors.map((author) => {
                  if (article)
                    if (author._id === article.author._id) return null;
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
          {error && (
            <p>{`Registrering feilet, prøv igjen.(${
              Array.isArray(error) ? error[0] : error
            })`}</p>
          )}
          {!submitSuccess ? (
            <Button
              type="submit"
              content={id ? 'Edit' : 'Create'}
              disabled={loading || hasErrors}
              backgroundColor="blue"
              color="white"
            />
          ) : (
            <StyledSuccessMessage>
              <p>Meldingen er sendt!</p>
              <p>Omdirigerer...</p>
            </StyledSuccessMessage>
          )}
        </StyledForm>
      )}

      <h4>Last opp bilde til artikkelen (valgfritt): </h4>
      <ImageForm
        handleSubmit={handleImageUpload}
        onChange={imageFormOnChange}
        error={imageError}
        success={imageSuccess}
        imageId={imageId}
      />
    </StyledFormContainer>
  );
};

export default ArticleForm;
