import React from 'react';
import ArticleVisitsLayout from '../../layouts/ArticleVisitsLayout';
import Jumbotron from '../../components/common/Jumbotron';
import useFetch from '../../hooks/useFetch';

const ArticleVisits = () => {
  const {
    error: articleVisitsError,
    loading: articleVisitsLoading,
    response: articleVisitsResponse,
    isSuccess: isArticleVisitsSuccess,
  } = useFetch('GET', 'userlog/articlevisits');

  return (
    <>
      <Jumbotron headerText="Articles " top="70" bottom="0" />
      <ArticleVisitsLayout>
        <h2>Article visits</h2>
      </ArticleVisitsLayout>
    </>
  );
};

export default ArticleVisits;
