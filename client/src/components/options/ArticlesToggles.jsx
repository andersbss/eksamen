import React from 'react';
import Articles from '../../pages/articles';
import Button from '../buttons/Button';

const ArticlesToggles = ({ isLoggedIn }) => {
  console.log();

  return (
    <>
      <Button content="NY ARTIKKEL" backgroundColor="blue" color="white" />
      <Button content="SØK" />
      <Button content="FILTER" />
    </>
  );
};

export default ArticlesToggles;
