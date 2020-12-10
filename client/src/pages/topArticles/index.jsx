import React from 'react';
import Loader from '../../components/animations/Loader';
import Jumbotron from '../../components/common/Jumbotron';
import Error from '../../components/errors/Error';
import ArticlesVisitsList from '../../components/lists/ArticlesVisitsList';
import useFetch from '../../hooks/useFetch';
import TopArticlesLayout from '../../layouts/TopArticlesLayout';

const TopArticles = () => {
  const { error, loading, response } = useFetch('GET', 'userlog/toparticles');

  return (
    <>
      <Jumbotron headerText="Top 10 besøkte artikler" top="70" bottom="0" />
      <TopArticlesLayout>
        {loading && <Loader />}
        {!loading && !error && <ArticlesVisitsList articles={response} />}
        {!loading && error && <Error error={error} />}
      </TopArticlesLayout>
    </>
  );
};

export default TopArticles;
