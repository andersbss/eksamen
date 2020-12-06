import React, { useState } from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesLayout from '../../layouts/ArticlesLayout';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/toggles/ArticlesToggles';
import useFetch from '../../hooks/useFetch';
import useFetchArr from '../../hooks/useFetchArr';
import { useUserContext } from '../../context/UserContext';
import PaginationToggle from '../../components/toggles/PaginationToggle';

const Articles = () => {
  const [page, setPage] = useState(1);
  const { loggedIn, isAdmin, userLoading } = useUserContext();
  const [
    categoryError,
    categoryLoading,
    categoryResponse,
    categoryIsSuccess,
  ] = useFetchArr('GET', '/categories');
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `${
      loggedIn
        ? `/articles?limit=5&page=${page}`
        : `/articles/public?limit=5&page=${page}`
    }`,
    userLoading
  );

  console.log(categoryResponse);

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesLayout>
        <ArticlesToggles loggedIn={loggedIn} isAdmin={isAdmin} />
        {loading && <Loader />}
        {isSuccess && !loading && <ArticleList articles={response.data} />}

        {isSuccess && !loading && (
          <PaginationToggle
            length={response.totalPages}
            setPage={setPage}
            currentPage={page}
          />
        )}
        {!isSuccess && !loading && <Error error={error} />}
      </ArticlesLayout>
    </>
  );
};

export default Articles;
