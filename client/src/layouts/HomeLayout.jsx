import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr, 2fr;
  grid-template-rows: 1fr, 1fr;
  grid-gap: 25px;
  margin: 25px;
  text-align: center;
`;

const HomeLayout = ({ children }) => <StyledGrid>{children}</StyledGrid>;

export default HomeLayout;
