import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: black;
  text-align: center;
`;

const LargeTitle = ({ content }) => <StyledTitle>{content}</StyledTitle>;

export default LargeTitle;
