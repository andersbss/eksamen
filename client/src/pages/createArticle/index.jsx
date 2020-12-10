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
import { upload } from '../../services/imageService';

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

  // Image
  const [file, setFile] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [imageSuccess, setImageSuccess] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [disabledImageUpload, setDisabledImageUpload] = useState(true);

  const imageFormOnChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    console.log(imageId);
    const { data } = await upload(file);

    if (data.success) {
      setImageSuccess(true);
      setImageError(null);
      setImageId(data?.data?._id);
    } else {
      setImageError(data.data);
      setImageSuccess(false);
    }
  };

  let putOrPost;

  if (id) putOrPost = ['PUT', `/articles/${id}`];
  else putOrPost = ['POST', '/articles'];

  const {
    loading: articlesLoading,
    response: articlesResponse,
    reqStatus: articlesStatus,
  } = useFetch('GET', `articles/${id}`);

  const {
    error: categoryFetchError,
    loading: categoryFetchLoading,
    response: categories,
    isSuccess: categoryIsSuccess,
  } = useFetch('GET', '/categories', false, refreshCategories);

  const {
    error: authorFetchError,
    loading: authorLoading,
    response: authors,
    isSuccess: authorIsSuccess,
  } = useFetch('GET', '/authors');

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
    setInputs: articleSetInputs,
  } = useForm(request, articleValidate, putOrPost, modalIsOpen);

  useEffect(() => {
    if (!categoryResponse) return;
    const {
      data: { success, data },
    } = categoryResponse;

    if (success) {
      setModalIsOpen(false);
      setCategorySuccess(true);
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
      setTimeout(() => history.push('/fagartikler'), 1500);
    } else setArticleError(data);
  }, [articleResponse, history]);

  useEffect(() => {
    if (articlesStatus === 200) {
      setArticle(articlesResponse);
    }
  }, [articlesStatus, articlesResponse]);

  useEffect(() => {
    if (file === null) setDisabledImageUpload(true);
    else setDisabledImageUpload(false);
  }, [file]);

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
          headerText={articlesLoading ? '...' : articlesResponse?.title}
        />
      )}
      {(articlesLoading || categoryLoading || authorLoading) && <Loader />}
      <ArticleForm
        id={id}
        article={article}
        handleSubmit={handleArticleSubmit}
        handleChange={handleArticleChange}
        errors={articleErrors}
        setArticleInputs={articleSetInputs}
        hasErrors={hasArticleErrors}
        loading={articleLoading}
        error={articleError}
        handleModalToggle={() => setModalIsOpen(true)}
        refreshCategories={refreshCategories}
        articleLoading={articlesLoading}
        authorFetchError={authorFetchError}
        authorLoading={authorLoading}
        authors={authors}
        authorIsSuccess={authorIsSuccess}
        categoryFetchError={categoryFetchError}
        categoryFetchLoading={categoryFetchLoading}
        categories={categories}
        categoryIsSuccess={categoryIsSuccess}
        imageFormOnChange={imageFormOnChange}
        handleImageUpload={handleImageUpload}
        imageError={imageError}
        imageSuccess={imageSuccess}
        submitSuccess={submitSuccess}
        imageId={imageId}
        disabledImageUpload={disabledImageUpload}
      />
      {articleError && <Error error={articleError} />}
      {categoryError && <Error error={categoryError} />}
    </>
  );
};

export default CreateArticle;
