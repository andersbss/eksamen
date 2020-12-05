import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 1200px;

  display: grid;
  grid-row-gap: 80px;
`;

const ArticlesLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default ArticlesLayout;
