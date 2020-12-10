import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';

const StyledContainer = styled.section`
  margin: 20px;
  text-align: left;
  width: 70%;
`;

export const StyledTitle = styled.h2`
  color: black;
`;

const Paragraph = ({ header, content }) => (
  <StyledContainer>
    <StyledTitle>{header}</StyledTitle>
    <p>{content}</p>
  </StyledContainer>
);

Paragraph.propTypes = {
  header: string,
  content: string,
};

export default Paragraph;
