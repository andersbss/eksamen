import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  display: grid;
  grid-row-gap: 20px;
  width: 400px;
`;

const UserVisitsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default UserVisitsLayout;
