import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledSection = styled.section`
  display: flex;

  & > button {
    margin-right: 20px;
  }
`;

const DetailArticleToggles = () => (
  <StyledSection>
    <Button content="SLETT" />
    <Button content="REDIGER" />
  </StyledSection>
);

export default DetailArticleToggles;
