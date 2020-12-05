import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.section`
  display: flex;
  margin-left: auto;
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
`;

const Pagination = ({ currentPage, setPage, length }) => (
  <StyledButtonContainer>
    {Array.from({ length }, (num, index) => (
      <StyledButton key={index}>{index + 1}</StyledButton>
    ))}
  </StyledButtonContainer>
);

export default Pagination;
