import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/dateFormatter';

const StyledInfoContainer = styled.span`
  display: flex;
  justify-content: space-between;

  & > h3 {
    font-size: 1.3rem;
    font-weight: 900;
  }
`;

const StyledArticle = styled.article`
  & > p {
    font-size: 2rem;
    font-weight: 400;

    &:nth-child(1) {
      margin-bottom: 100px;
    }
  }
`;

const ArticleDetailArticle = ({ article }) => {
  console.log(article);

  return (
    <StyledArticle>
      <StyledInfoContainer>
        <h3>{`Av ${article.author.firstName} ${article.author.lastName}`}</h3>
        <h3>{formatDate(article.createdAt)}</h3>
      </StyledInfoContainer>
      <p>{article.ingress}</p>
      <p>{article.content}</p>
    </StyledArticle>
  );
};

export default ArticleDetailArticle;
