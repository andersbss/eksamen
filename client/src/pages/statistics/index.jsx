import React, { useEffect } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import useFetch from '../../hooks/useFetch';
import StatisticsLayout from '../../layouts/StatisticsLayout';

const Statistics = () => {
  const {
    error: userVisitsError,
    loading: userVisitsLoading,
    response: userVisitsResponse,
    isSuccess: isUserVisitsSuccess,
  } = useFetch('GET', 'userlog/uservisits');

  const {
    error: articleVisitsError,
    loading: articleVisitsLoading,
    response: articleVisitsResponse,
    isSuccess: isArticleVisitsSuccess,
  } = useFetch('GET', 'userlog/articlevisits');

  const {
    error: topArticlesError,
    loading: topArticlesLoading,
    response: topArticlesResponse,
    isSuccess: isTopArticlesSuccess,
  } = useFetch('GET', 'userlog/toparticles');

  useEffect(() => {
    console.log(userVisitsResponse);
    console.log(articleVisitsResponse);
  }, [userVisitsResponse, articleVisitsResponse]);

  return (
    <>
      <Jumbotron headerText="Statistikk" top="70" bottom="0" />
      <StatisticsLayout>
        <h2>Test</h2>
      </StatisticsLayout>
    </>
  );
};

export default Statistics;
