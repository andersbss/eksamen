import React, { useState, useEffect, useRef } from 'react';
import StyledSelect from '../styledComponents/StyledSelect';

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
