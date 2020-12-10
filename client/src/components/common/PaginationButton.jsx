import React from 'react';
import { number, func } from 'prop-types';
import styled from 'styled-components';

export const StyledButton = styled.button`
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

PaginationButton.propTypes = {
  number,
  currentPage: number,
  setPage: func,
};

export default PaginationButton;
