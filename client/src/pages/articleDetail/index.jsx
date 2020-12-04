import React from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleDetailLayout from '../../layouts/ArticleDetailLayout';
import Error from '../../components/errors/Error';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import ArticleDetailItem from '../../components/items/ArticleDetailItem';

const ArticleDetail = () => {
  const { id } = useParams();
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `articles/${id}`
  );

  return (
    <>
      <Jumbotron headerText={loading ? '...' : response.title} />
      <ArticleDetailLayout>
        {loading && <Loader />}
        {isSuccess && !loading && <ArticleDetailItem article={response} />}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticleDetailLayout>
    </>
  );
};

export default ArticleDetail;
