import React from 'react';
import styled from 'styled-components';
import PaginationButton from '../buttons/PaginationButton';

const StyledButtonContainer = styled.section`
  display: flex;
  margin-left: auto;
`;

const Pagination = ({ currentPage, setPage, length }) => (
  <StyledButtonContainer>
    {Array.from({ length }, (num, index) => (
      <PaginationButton key={index} number={index + 1} />
    ))}
  </StyledButtonContainer>
);

export default Pagination;
