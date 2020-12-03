import React from 'react';
import styled from 'styled-components';

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
        <p>Finner inne artikler for øyeblikket. Vennligst prøv igjen senere</p>
      ) : (
        articles.map((article) => <li>{article.title}</li>)
      )}
    </StyledUl>
  );
};

export default ArticleList;
