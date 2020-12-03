import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesContainer from '../../components/containers/ArticlesContainer';
import ArticlesToggles from '../../components/options/ArticlesToggles';
import useFetch from '../../hooks/useFetch';

const Articles = () => {
  const { error, loading, response, isSuccess } = useFetch('GET', '/articles');

  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesContainer>
        <ArticlesToggles />
      </ArticlesContainer>
    </>
  );
};

export default Articles;
