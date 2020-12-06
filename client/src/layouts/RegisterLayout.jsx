import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
`;

const RegisterLayout = ({ children }) => {
  <StyledMain>{children}</StyledMain>;
};

export default RegisterLayout;
