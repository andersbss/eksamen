import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
`;

const StatisticsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default StatisticsLayout;
