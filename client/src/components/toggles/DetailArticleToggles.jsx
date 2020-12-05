import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledSection = styled.section`
  display: flex;

  & > button {
    margin-right: 20px;
  }
`;

const DetailArticleToggles = ({ handleDelete, handleEdit }) => (
  <StyledSection>
    <Button content="SLETT" onClick={() => handleDelete()} />
    <Button content="REDIGER" onClick={() => handleEdit()} />
  </StyledSection>
);

export default DetailArticleToggles;
