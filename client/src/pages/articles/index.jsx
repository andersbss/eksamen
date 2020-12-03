import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesContainer from '../../components/containers/ArticlesContainer';
import ArticlesToggles from '../../components/options/ArticlesToggles';

const Articles = () => {
  console.log();
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
