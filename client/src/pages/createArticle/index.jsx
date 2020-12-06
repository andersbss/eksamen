import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleForm from '../../components/forms/ArticleForm';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const { error, loading, response, isSuccess, reqStatus } = useFetch(
    'GET',
    `articles/${id}`
  );

  useEffect(() => {
    if (reqStatus === 200) {
      setArticle(response);
    }
  }, [reqStatus, response]);

  return (
    <>
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
