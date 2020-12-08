import React from 'react';
import styled from 'styled-components';
import TopArticleItem from '../items/TopArticleItem';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  border: solid;
`;

const TopArticlesList = ({ articles }) => {
  console.log();
  return (
    <StyledUl>
      {!articles || articles.length === 0 ? (
        <li>
          Finner ingen artikler for øyeblikket. Vennligst prøv igjen senere
        </li>
      ) : (
        articles.map((article) => (
          <TopArticleItem key={article._id} article={article} />
        ))
      )}
    </StyledUl>
  );
};

export default TopArticlesList;
