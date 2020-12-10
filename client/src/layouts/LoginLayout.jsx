import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  display: grid;
  width: 500px;
  row-gap: 30px;
`;

const LoginLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default LoginLayout;
