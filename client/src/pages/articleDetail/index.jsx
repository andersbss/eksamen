import React from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleDetailLayout from '../../layouts/ArticleDetailLayout';
import useFetch from '../../hooks/useFetch';

const ArticleDetail = () => {
  const { id } = useParams();
  const { error, loading, response, isSuccess } = useFetch(
    'GET',
    `articles/${id}`
  );

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
