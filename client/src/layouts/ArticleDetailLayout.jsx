import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  display: grid;
`;

const ArticleDetailLayout = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default ArticleDetailLayout;
