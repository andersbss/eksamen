import React from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleDetailLayout from '../../layouts/ArticleDetailLayout';

const ArticleDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Jumbotron headerText="Tittel" />
      <ArticleDetailLayout>
        <p>test</p>
      </ArticleDetailLayout>
    </>
  );
};

export default ArticleDetail;
