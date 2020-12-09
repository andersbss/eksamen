import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleForm from '../../components/forms/ArticleForm';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import Modal from '../../components/modals/Modal';
import useForm from '../../hooks/useForm';
import { request } from '../../services/httpService';
import categoryValidate from '../../utils/categoryValidation';
import articleValidate from '../../utils/articleFormValidation';
import CategoryForm from '../../components/forms/CategoryForm';
import Error from '../../components/errors/Error';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [articleError, setArticleError] = useState(null);
  const [categorySuccess, setCategorySuccess] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [refreshCategories, setRefreshCategories] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const history = useHistory();
  let putOrPost;

  if (id) {
    putOrPost = ['PUT', `/articles/${id}`];
  } else {
    putOrPost = ['POST', '/articles'];
  }

  const {
    loading: articlesLoading,
    response: articlesResponse,
    reqStatus: articlesStatus,
  } = useFetch('GET', `articles/${id}`);

  const {
    handleChange: handleCategoryChange,
    handleSubmit: handleCategorySubmit,
    errors: categoryErrors,
    hasErrors: hasCategoryErrors,
    loading: categoryLoading,
    response: categoryResponse,
  } = useForm(request, categoryValidate, ['POST', '/categories']);

  const {
    handleChange: handleArticleChange,
    handleSubmit: handleArticleSubmit,
    errors: articleErrors,
    hasErrors: hasArticleErrors,
    loading: articleLoading,
    response: articleResponse,
  } = useForm(request, articleValidate, putOrPost);

  useEffect(() => {
    if (!categoryResponse) return;
    const {
      data: { success, data },
    } = categoryResponse;

    if (success) {
      setModalIsOpen(false);
      setRefreshCategories((prev) => !prev);
    } else setCategoryError(data);
  }, [categoryResponse]);

  useEffect(() => {
    if (!articleResponse) return;
    const {
      data: { success, data },
    } = articleResponse;

    if (success) {
      setSubmitSuccess(success);
      history.push('/fagartikler');
    } else setArticleError(data);
  }, [articleResponse, history]);

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
            handleSubmit={handleCategorySubmit}
            handleChange={handleCategoryChange}
            errors={categoryErrors}
            hasErrors={hasCategoryErrors}
            success={categorySuccess}
            loading={categoryLoading}
            error={categoryError}
            submitSuccess={submitSuccess}
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
        handleSubmit={handleArticleSubmit}
        handleChange={handleArticleChange}
        errors={articleErrors}
        hasErrors={hasArticleErrors}
        loading={articleLoading}
        error={articleError}
        handleModalToggle={() => setModalIsOpen(true)}
        refreshCategories={refreshCategories}
        articleLoading={articlesLoading}
      />
      {articleError && <Error error={articleError} />}
      {categoryError && <Error error={categoryError} />}
    </>
  );
};

export default CreateArticle;
