import React from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleDetailLayout from '../../layouts/ArticleDetailLayout';
import Error from '../../components/errors/Error';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/animations/Loader';
import NotFound from '../notFound';
import ArticleDetailArticle from '../../components/articles/ArticleDetailArticle';
import DetailArticleToggles from '../../components/toggles/DetailArticleToggles';

const ArticleDetail = () => {
  const { id } = useParams();
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `articles/${id}`
  );

  return (
    <>
      {error === 'Resource not found. Invalid _id' ? (
        <NotFound />
      ) : (
        <>
          <Jumbotron headerText={loading ? '...' : response.title} />
          <ArticleDetailLayout>
            {loading && <Loader />}
            {isSuccess && !loading && (
              <ArticleDetailArticle article={response} />
            )}
            <DetailArticleToggles />
            {!isSuccess && !loading && <Error error={error} />}
          </ArticleDetailLayout>
        </>
      )}
    </>
  );
};

export default ArticleDetail;
