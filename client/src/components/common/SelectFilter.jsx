import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  font-size: ${(props) => props.theme.fonts.sizes.button};
  font-weight: ${(props) => props.theme.fonts.weights.button};
  height: 85px;
  width: 200px;
  border: 0;
  background-color: ${(props) => props.theme.colors.lightGrey};
  text-align-last: center;

  cursor: pointer;

  option {
    font-size: 1.5rem;
    margin: auto;
    &:nth-child(1) {
      display: ${(props) => (props.optionSelected ? 'none' : 'block')};
    }
  }
`;

const SelectFilter = ({ categories, setChosenCategory, chosenCategory }) => {
  const [headerOption, setHeaderOption] = useState('FILTER');
  const selectedCat = useRef(null);

  useEffect(() => {
    if (chosenCategory) {
      setHeaderOption('INGEN');
      if (chosenCategory === 'INGEN') setHeaderOption('FILTER');
    }
  }, [chosenCategory]);

  return (
    <StyledSelect
      onChange={(e) => setChosenCategory(e.target.value)}
      optionSelected={headerOption === 'FILTER'}
      ref={selectedCat}
    >
      <option>{headerOption}</option>
      {categories?.map((category) => (
        <option value={category._id} key={category._id}>
          {category.title}
        </option>
      ))}
    </StyledSelect>
  );
};

export default SelectFilter;
