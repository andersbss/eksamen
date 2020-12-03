import React from 'react';
import Articles from '../../pages/articles';
import Button from '../buttons/Button';

const ArticlesToggles = ({ isLoggedIn }) => {
  console.log();

  return (
    <>
      <Button content="Søk" />
      <Button content="Filter" />
    </>
  );
};

export default ArticlesToggles;
