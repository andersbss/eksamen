import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)``;

const ArticleVisitsLayout = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default ArticleVisitsLayout;
