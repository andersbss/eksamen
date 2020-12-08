import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import TopArticlesList from '../../components/lists/TopArticlesList';
import useFetch from '../../hooks/useFetch';

const TopArticles = () => {
  const {
    error: topArticlesError,
    loading: topArticlesLoading,
    response: topArticlesResponse,
    isSuccess: isTopArticlesSuccess,
  } = useFetch('GET', 'userlog/toparticles');

  return (
    <>
      <Jumbotron headerText="Statistikk" top="70" bottom="0" />

      <TopArticlesLayout>
        <h2>Mest leste artikler</h2>
        {!topArticlesLoading && (
          <TopArticlesList articles={topArticlesResponse} />
        )}
      </TopArticlesLayout>
    </>
  );
};

export default TopArticles;
