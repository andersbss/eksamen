import React from 'react';
import styled from 'styled-components';

const StyledInfoContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

const ArticleDetailItem = ({ article }) => {
  console.log(article);

  return (
    <article>
      <StyledInfoContainer>
        <h3>{`Av ${article.author.firstName} ${article.author.lastName}`}</h3>
      </StyledInfoContainer>

      <p>{article.title}</p>
    </article>
  );
};

export default ArticleDetailItem;
