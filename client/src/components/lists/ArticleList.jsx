import React from 'react';
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
    {!articles && articles.length <= 0 ? (
      <p>Finner ingen artikler for øyeblikket. Vennligst prøv igjen senere</p>
    ) : (
      articles.map((article) => (
        <ArticleItem
          key={article._id}
          title={article.title}
          ingress={article.ingress}
          id={article._id}
          categoryTitle={article.category.title}
        />
      ))
    )}
  </StyledUl>
);

export default ArticleList;
