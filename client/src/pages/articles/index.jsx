import React, { useState, useEffect } from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesLayout from '../../layouts/ArticlesLayout';
import Error from '../../components/errors/Error';
import ArticleList from '../../components/lists/ArticleList';
import ArticlesToggles from '../../components/toggles/ArticlesToggles';
import useFetch from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';
import PaginationToggle from '../../components/toggles/PaginationToggle';

const Articles = () => {
  const [page, setPage] = useState(1);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { loggedIn, isAdmin, isSuperAdmin, userLoading } = useUserContext();

  const {
    loading: categoryLoading,
    response: categoryResponse,
    isSuccess: categoryIsSuccess,
  } = useFetch('GET', '/categories');

  // Dette kunne blitt håndtert bedre med axios sin egen queryparam opsjon.
  // Tenkte ikke over dette førs like før innelevering.
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `/articles?limit=5&page=${page}${
      chosenCategory && chosenCategory !== 'INGEN'
        ? `&category=${chosenCategory}`
        : ''
    }${searchTerm ? `&search=${searchTerm}` : ''}`,
    userLoading
  );

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  useEffect(() => {
    setPage(1);
  }, [chosenCategory, setPage]);

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesLayout>
        {categoryIsSuccess && !categoryLoading && (
          <ArticlesToggles
            loggedIn={loggedIn}
            isAdmin={isAdmin || isSuperAdmin}
            categories={categoryResponse}
            setChosenCategory={setChosenCategory}
            chosenCategory={chosenCategory}
            setSearchTerm={setSearchInput}
            searchTerm={searchInput}
            handleSearch={handleSearch}
          />
        )}

        {loading ? (
          <Loader />
        ) : (
          <>
            {isSuccess && <ArticleList articles={response?.data} />}

            {isSuccess && (
              <PaginationToggle
                length={response.totalPages}
                setPage={setPage}
                currentPage={page}
              />
            )}
          </>
        )}

        {!isSuccess && !loading && <Error error={error} />}
        {!categoryIsSuccess && !categoryLoading && <Error error={error} />}
      </ArticlesLayout>
    </>
  );
};

export default Articles;
