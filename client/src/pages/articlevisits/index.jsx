import React from 'react';
import Error from '../../components/errors/Error';
import Jumbotron from '../../components/common/Jumbotron';
import useFetch from '../../hooks/useFetch';
import ArticlesVisitsList from '../../components/lists/ArticlesVisitsList';
import Loader from '../../components/animations/Loader';
import ArticlesVisitsLayout from '../../layouts/TopArticlesLayout';

const ArticleVisits = () => {
  const { error, loading, response } = useFetch('GET', 'userlog/articlevisits');

  return (
    <>
      <Jumbotron headerText="Visninger per artikkel " top="70" bottom="0" />
      <ArticlesVisitsLayout>
        {loading && <Loader />}
        {!loading && !error && <ArticlesVisitsList articles={response} />}
        {!loading && error && <Error error={error} />}
      </ArticlesVisitsLayout>
    </>
  );
};

export default ArticleVisits;
