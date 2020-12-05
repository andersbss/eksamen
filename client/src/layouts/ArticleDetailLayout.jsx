import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  margin-top: 50px;
  display: grid;
  width: 1000px;
`;

const ArticleDetailLayout = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default ArticleDetailLayout;
