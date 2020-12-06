import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  margin: auto;
  margin-top: 80px;
  width: 500px;
  row-gap: 30px;
`;

const LoginLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default LoginLayout;
