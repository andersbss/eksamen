import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import ArticleForm from '../../components/forms/ArticleForm';

const CreateArticle = () => (
  <>
    <Jumbotron headerText="Ny artikkel" />
    <ArticleForm />
  </>
);

export default CreateArticle;
