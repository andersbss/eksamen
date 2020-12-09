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
  float: right;
  margin-right: 15px;

  cursor: pointer;

  option {
    font-size: 1.5rem;
    margin: auto;
    &:nth-child(1) {
      display: ${(props) => (props.optionSelected ? 'none' : 'block')};
    }
  }
`;

const SelectFilter = ({ locations, setChosenLocation, chosenLocation }) => {
  const [headerOption, setHeaderOption] = useState('FILTER');
  const selectedLocation = useRef(null);

  useEffect(() => {
    if (chosenLocation) {
      setHeaderOption('INGEN');
      if (chosenLocation === 'INGEN') setHeaderOption('FILTER');
    }
  }, [chosenLocation]);

  return (
    <StyledSelect
      onChange={(e) => setChosenLocation(e.target.value)}
      optionSelected={headerOption === 'FILTER'}
      ref={selectedLocation}
    >
      <option>{headerOption}</option>
      {locations?.map((location) => (
        <option value={location} key={location}>
          {location}
        </option>
      ))}
    </StyledSelect>
  );
};

export default SelectFilter;
