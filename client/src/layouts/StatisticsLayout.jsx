import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  margin: auto;
  margin-top: 25px;
  width: 500px;
`;

const StatisticsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default StatisticsLayout;
