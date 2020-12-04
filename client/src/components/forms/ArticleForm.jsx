import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import Select from '../common/Select';
import Error from '../errors/Error';
import useFetch from '../../hooks/useFetch';
import inputValidation from '../../utils/formValidation';

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
  published: '',
  category: '',
  author: '',
});

const ArticleForm = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(true);
  const [titleError, setTitleError] = useState(' ');
  const [ingressError, setIngressError] = useState(' ');
  const [contentError, setContentError] = useState(' ');

  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    '/categories'
  );

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
    console.log(formData);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledLabel>
          Tittel {titleError && `${titleError}`}
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
          Ingress {ingressError && `${ingressError}`}
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
          Innhold {contentError && `${contentError}`}
          <textarea
            name="content"
            placeholder="Innhold"
            maxLength="3000"
            required
            rows="4"
            cols="50"
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
