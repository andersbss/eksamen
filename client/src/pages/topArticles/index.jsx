import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesVisitsList from '../../components/lists/ArticlesVisitsList';
import useFetch from '../../hooks/useFetch';
import TopArticlesLayout from '../../layouts/TopArticlesLayout';

const TopArticles = () => {
  const {
    error: topArticlesError,
    loading: topArticlesLoading,
    response: topArticlesResponse,
    isSuccess: isTopArticlesSuccess,
  } = useFetch('GET', 'userlog/toparticles');

  return (
    <>
      <Jumbotron headerText="Top 10 mest leste artikler" top="70" bottom="0" />

      <TopArticlesLayout>
        {!topArticlesLoading && (
          <ArticlesVisitsList articles={topArticlesResponse} />
        )}
      </TopArticlesLayout>
    </>
  );
};

export default TopArticles;
