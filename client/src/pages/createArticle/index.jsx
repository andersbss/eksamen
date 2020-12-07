import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleForm from '../../components/forms/ArticleForm';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import Modal from '../../components/modals/Modal';
import useForm from '../../hooks/useForm';
import { request } from '../../services/httpService';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { loading, response, reqStatus } = useFetch('GET', `articles/${id}`);
  // const blah = useForm(request, val);

  useEffect(() => {
    if (reqStatus === 200) {
      setArticle(response);
    }
  }, [reqStatus, response]);

  return (
    <>
      <Modal />
      {!id && <Jumbotron headerText="Ny artikkel" />}
      {id && (
        <Jumbotron headerText={loading ? 'loading...' : response?.title} />
      )}
      {loading && <Loader />}
      <ArticleForm id={id} article={article} />
    </>
  );
};

export default CreateArticle;
