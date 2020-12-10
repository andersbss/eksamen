import React from 'react';
import { string, func, number } from 'prop-types';
import styled from 'styled-components';
import PaginationButton from '../common/PaginationButton';

const StyledButtonContainer = styled.section`
  display: flex;
  margin-left: auto;
`;

const PaginationToggle = ({ currentPage, setPage, length }) => (
  <StyledButtonContainer>
    {Array.from({ length }, (num, index) => (
      <PaginationButton
        key={index}
        setPage={setPage}
        currentPage={currentPage}
        number={index + 1}
      />
    ))}
  </StyledButtonContainer>
);

PaginationToggle.propTypes = {
  currentPage: number.isRequired,
  setPage: func.isRequired,
  length: number.isRequired,
};

export default PaginationToggle;
