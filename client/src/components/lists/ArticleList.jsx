import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import ArticleItem from '../items/ArticleItem';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  grid-row-gap: 80px;
`;

const ArticleList = ({ articles }) => (
  <StyledUl>
    {!articles || articles.length <= 0 ? (
      <p>Finner ingen artikler</p>
    ) : (
      articles.map((article) => (
        <ArticleItem
          key={article._id}
          title={article.title}
          ingress={article.ingress}
          id={article._id}
          categoryTitle={article.category.title}
          image={article.image}
        />
      ))
    )}
  </StyledUl>
);

ArticleList.propTypes = {
  articles: array.isRequired,
};

export default ArticleList;
