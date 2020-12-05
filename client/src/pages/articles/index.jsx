import React, { useState } from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesLayout from '../../layouts/ArticlesLayout';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/toggles/ArticlesToggles';
import useFetch from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';

const Articles = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { loggedIn, isAdmin, userLoading } = useUserContext();
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `${loggedIn ? '/articles' : '/articles/public'}`,
    userLoading
  );

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesLayout>
        <ArticlesToggles loggedIn={loggedIn} isAdmin={isAdmin} />
        {loading && <Loader />}
        {isSuccess && !loading && <ArticleList articles={response.data} />}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticlesLayout>
    </>
  );
};

export default Articles;
