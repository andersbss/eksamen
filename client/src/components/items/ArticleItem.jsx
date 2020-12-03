import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
`;

const ArticleItem = ({ title, ingress, content, categoryTitle, image }) => {
  console.log();
  return (
    <StyledLi>
      <p>{title}</p>
      <p>{ingress}</p>
      <p>{content}</p>
      <p>{categoryTitle}</p>
    </StyledLi>
  );
};

export default ArticleItem;
