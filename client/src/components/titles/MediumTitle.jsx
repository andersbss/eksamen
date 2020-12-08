import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color: black;
  text-align: center;
`;

const MediumTitle = ({ content }) => <StyledTitle>{content}</StyledTitle>;

export default MediumTitle;
