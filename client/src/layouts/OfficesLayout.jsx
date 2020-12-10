import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  display: grid;
  width: 1600px;
`;

const OfficesLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default OfficesLayout;
