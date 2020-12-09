import React, { useState, useEffect, useRef } from 'react';
import StyledSelect from '../styledComponents/StyledSelect';

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
