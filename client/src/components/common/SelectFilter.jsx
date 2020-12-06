import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  height: 85px;
  width: 200px;

  border: 0;
  background-color: ${(props) => props.theme.colors.lightGrey};

  option {
    text-align: center;
    font-size: 1.5rem;

    &:nth-child(1) {
      display: ${(props) => (props.optionSelected ? 'none' : 'block')};
    }
  }
`;

const SelectFilter = ({ categories }) => {
  const [selected, setSelected] = useState(null);
  const [headerOption, setHeaderOption] = useState('FILTER');

  useEffect(() => {
    if (selected) {
      setHeaderOption('INGEN');

      if (selected === 'INGEN') {
        setHeaderOption('FILTER');
      }
    }
  }, [selected]);

  return (
    <StyledSelect
      onChange={(e) => setSelected(e.target.value)}
      optionSelected={headerOption === 'FILTER'}
    >
      <option>{headerOption}</option>
      {categories?.map((category) => (
        <option key={category._id}>{category.title}</option>
      ))}
    </StyledSelect>
  );
};

export default SelectFilter;
