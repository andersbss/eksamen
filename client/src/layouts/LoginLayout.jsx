import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  margin-top: 80px;
  width: 800px;
`;

const LoginLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default LoginLayout;
