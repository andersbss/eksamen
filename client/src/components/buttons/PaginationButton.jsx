import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border: none;

  font-size: 1.2rem;
  font-weight: 600;

  cursor: pointer;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.lightGrey};

  &:nth-child(${(props) => props.currentPage}) {
    background-color: ${(props) => props.theme.colors.black};
  }
`;

const PaginationButton = ({ number, currentPage, setPage }) => (
  <StyledButton currentPage={currentPage} onClick={() => setPage(number)}>
    {number}
  </StyledButton>
);

export default PaginationButton;
