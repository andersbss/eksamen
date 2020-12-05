import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
`;

const PaginationButton = ({ number, setPage }) => (
  <StyledButton onClick={() => setPage(number)}>{number}</StyledButton>
);

export default PaginationButton;
