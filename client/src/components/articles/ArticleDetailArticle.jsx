import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/dateFormatter';

const StyledInfoContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

const ArticleDetailArticle = ({ article }) => {
  console.log(article);

  return (
    <article>
      <StyledInfoContainer>
        <h3>{`Av ${article.author.firstName} ${article.author.lastName}`}</h3>
        <h3>{formatDate(article.createdAt)}</h3>
      </StyledInfoContainer>

      <p>{article.title}</p>
    </article>
  );
};

export default ArticleDetailArticle;
