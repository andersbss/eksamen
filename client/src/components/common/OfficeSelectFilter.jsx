import React, { useState, useEffect, useRef } from 'react';
import { string, array, func } from 'prop-types';
import StyledSelect from '../styledComponents/StyledSelect';

// Denne skulle bli gjort generisk, slik at den kan brukes i både er og Category select filter, men vi fikk dessverre ikke tid
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

SelectFilter.propTypes = {
  locations: array,
  setChosenLocation: func,
  chosenLocation: string,
};

export default SelectFilter;
