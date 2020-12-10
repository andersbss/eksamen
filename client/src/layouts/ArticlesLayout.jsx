import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  width: 1200px;
  display: grid;
  grid-row-gap: 80px;
`;

const ArticlesLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default ArticlesLayout;
