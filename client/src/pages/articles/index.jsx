import React from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesContainer from '../../components/containers/ArticlesContainer';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/options/ArticlesToggles';
import useFetch from '../../hooks/useFetch';

const Articles = () => {
  const { error, loading, response, isSuccess } = useFetch('GET', '/articles');

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesContainer>
        <ArticlesToggles />
        {loading && !isSuccess ? (
          <Loader />
        ) : (
          <ArticleList articles={response} />
        )}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticlesContainer>
    </>
  );
};

export default Articles;
