import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ArticlesToggles from '../../components/options/ArticlesToggles';

const Articles = () => {
  console.log();
  return (
    <>
      <Jumbotron headerText="Fagartikler" />
      <ArticlesToggles />
    </>
  );
};

export default Articles;
