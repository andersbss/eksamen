import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select``;

const SelectFilter = ({ categories }) => {
  console.log();

  return (
    <StyledSelect>
      {categories?.map((category) => (
        <option key={category._id}>{category.title}</option>
      ))}
    </StyledSelect>
  );
};

export default SelectFilter;
