import React from 'react';
import styled from 'styled-components';
import ArticleItem from '../items/ArticleItem';

const StyledUl = styled.ul`
  list-style: none;

  & > li {
    margin: 0;
  }
`;

const ArticleList = ({ articles }) => {
  console.log();

  return (
    <StyledUl>
      {!articles && articles.length <= 0 ? (
        <p>Finner ingen artikler for øyeblikket. Vennligst prøv igjen senere</p>
      ) : (
        articles.map((article) => (
          <ArticleItem
            key={article._id}
            title={article.title}
            ingress={article.ingress}
            content={article.content}
            category={article.category.title}
          />
        ))
      )}
    </StyledUl>
  );
};

export default ArticleList;
