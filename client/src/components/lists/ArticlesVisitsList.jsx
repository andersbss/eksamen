import React from 'react';
import styled from 'styled-components';
import ArticleVisitsItem from '../items/ArticleVisitisItem';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
`;

const ArticlesVisitsList = ({ articles }) => (
  <StyledUl>
    {!articles || articles.length === 0 ? (
      <li>Finner ingen artikler for øyeblikket, prøv igjen senere</li>
    ) : (
      articles.map((article) => (
        <ArticleVisitsItem key={article._id} article={article} />
      ))
    )}
  </StyledUl>
);

export default ArticlesVisitsList;
