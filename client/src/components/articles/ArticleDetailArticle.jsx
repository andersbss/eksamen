import React from 'react';
import styled from 'styled-components';
import { string, number, shape } from 'prop-types';
import formatDate from '../../utils/dateFormatter';
import Image from '../images/Image';

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

    &:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 700;
    }

    &:last-child {
      font-size: 1.2rem;
      font-weight: 900;
    }
  }
`;

const ArticleDetailArticle = ({ article }) => (
  <StyledArticle>
    <StyledInfoContainer>
      <h3>{`Av ${article.author.firstName} ${article.author.lastName}`}</h3>
      <h3>{formatDate(article.createdAt)}</h3>
    </StyledInfoContainer>
    <p>
      Lesetid: {article.readTime}
      {` ${article.readTime < 1 ? 'minutt' : 'minutter'}`}
    </p>
    <p>{article.ingress}</p>
    <p>{article.content}</p>
    <p>{article.category.title}</p>
    {article.image && <Image imageId={article.image} height="400px" />}
  </StyledArticle>
);

ArticleDetailArticle.propTypes = {
  article: shape({
    ingress: string,
    content: string,
    readTime: number.isRequired,
    createdAt: string.isRequired,
    author: shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
    }),
    category: shape({
      title: string.isRequired,
    }),
  }),
};

export default ArticleDetailArticle;
