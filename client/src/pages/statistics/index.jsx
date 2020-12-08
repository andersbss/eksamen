import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

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

  return <h1>Stats</h1>;
};

export default Statistics;
