import React from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesContainer from '../../layouts/ArticlesLayout';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/options/ArticlesToggles';
import useFetch from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';

const Articles = () => {
  const { error, loading, response, isSuccess } = useFetch('GET', '/articles');
  const { loggedIn, isAdmin } = useUserContext();

  const handleArticleClick = (articleId) => {
    console.log(articleId);
  };

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesContainer>
        <ArticlesToggles loggedIn={loggedIn} isAdmin={isAdmin} />
        {loading && <Loader />}
        {isSuccess && !loading && (
          <ArticleList
            articles={response}
            handleArticleClick={handleArticleClick}
          />
        )}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticlesContainer>
    </>
  );
};

export default Articles;
