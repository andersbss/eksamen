import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  margin: auto;
  margin-top: 25px;
  width: 500px;

  row-gap: 25px;

  & > button {
    margin: auto;
  }
`;

const StatisticsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default StatisticsLayout;
