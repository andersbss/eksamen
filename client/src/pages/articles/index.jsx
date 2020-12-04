import React from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesLayout from '../../layouts/ArticlesLayout';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/options/ArticlesToggles';
import useFetch from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';

const Articles = () => {
  const { error, loading, response, isSuccess } = useFetch('GET', '/articles');
  const { loggedIn, isAdmin } = useUserContext();

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesLayout>
        <ArticlesToggles loggedIn={loggedIn} isAdmin={isAdmin} />
        {loading && <Loader />}
        {isSuccess && !loading && <ArticleList articles={response} />}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticlesLayout>
    </>
  );
};

export default Articles;
