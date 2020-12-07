import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleForm from '../../components/forms/ArticleForm';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import Modal from '../../components/modals/Modal';
import useForm from '../../hooks/useForm';
import { request } from '../../services/httpService';
import validate from '../../utils/categoryValidation';
import CategoryForm from '../../components/forms/CategoryForm';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [categorySuccess, setCcategorySuccess] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    loading: articlesLoading,
    response: articlesResponse,
    reqStatus: articlesStatus,
  } = useFetch('GET', `articles/${id}`);

  const {
    handleChange,
    handleSubmit,
    errors,
    hasErrors,
    loading,
    response,
  } = useForm(request, validate, ['POST', '/categories']);

  useEffect(() => {
    if (articlesStatus === 200) {
      setArticle(articlesResponse);
    }
  }, [articlesStatus, articlesResponse]);

  return (
    <>
      {modalIsOpen && (
        <Modal handleToggle={() => setModalIsOpen(false)}>
          <CategoryForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            hasErrors={hasErrors}
            success={categorySuccess}
            loading={loading}
            error={error}
          />
        </Modal>
      )}
      {!id && <Jumbotron headerText="Ny artikkel" />}
      {id && (
        <Jumbotron
          headerText={articlesLoading ? 'loading...' : articlesResponse?.title}
        />
      )}
      {articlesLoading && <Loader />}
      <ArticleForm
        id={id}
        article={article}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        hasErrors={hasErrors}
        loading={loading}
        error={error}
        handleModalToggle={() => setModalIsOpen(true)}
      />
    </>
  );
};

export default CreateArticle;
