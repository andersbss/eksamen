import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul``;

const TopArticlesList = ({ articles }) => {
  console.log();
  return (
    <StyledUl>
      {!articles || articles.length === 0 ? (
        <li>
          Finner ingen artikler for øyeblikket. Vennligst prøv igjen senere
        </li>
      ) : (
        articles.map((article) => <li key={article._id}>{article?.count}</li>)
      )}
    </StyledUl>
  );
};

export default TopArticlesList;
