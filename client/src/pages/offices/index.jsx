import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Jumbotron from '../../components/common/Jumbotron';
import OfficeGrid from '../../components/grids/OfficeGrid';
import OfficeList from '../../components/lists/OfficeList';
import OfficeViewToggle from '../../components/toggles/OfficeViewToggle';
import OfficeSelectFilter from '../../components/common/OfficeSelectFilter';
import { officeList } from '../../mockUpData';

const StyledContainer = styled.main`
  margin-top: 140px;
`;

const Offices = () => {
  const [toggleView, setToggleView] = useState(true);
  const [chosenLocation, setChosenLocation] = useState('INGEN');
  const [offices, setOffices] = useState(officeList);
  const locations = officeList.map((office) => office.location);

  const filterOffices = (offices, location) => {
    if (location === 'INGEN') return offices;

    const filteredOffices = offices.filter((office) => {
      if (office.location === location) return true;
      return false;
    });
    return filteredOffices;
  };

  useEffect(() => {
    setOffices(filterOffices(officeList, chosenLocation));
  }, [chosenLocation]);

  const handleListToggle = () => {
    setToggleView(false);
  };
  const handleGridToggle = () => {
    setToggleView(true);
  };

  return (
    <>
      <Jumbotron headerText="Våre kontorer" />
      <StyledContainer>
        <OfficeViewToggle
          handleGridToggle={handleGridToggle}
          handleListToggle={handleListToggle}
          gridColor={toggleView ? 'blue' : ''}
          listColor={toggleView ? '' : 'blue'}
        />
        <OfficeSelectFilter
          locations={locations}
          chosenLocation={chosenLocation}
          setChosenLocation={setChosenLocation}
        />
        {toggleView && <OfficeGrid officeList={offices} />}
        {!toggleView && <OfficeList officeList={offices} />}
      </StyledContainer>
    </>
  );
};

export default Offices;
