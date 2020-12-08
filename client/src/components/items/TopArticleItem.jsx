import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  height: 50px;
`;

const TopArticleItem = ({ article }) => {
  console.log();

  return <StyledLi>{article.title}</StyledLi>;
};

export default TopArticleItem;
