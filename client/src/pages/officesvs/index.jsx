import React, { useEffect, useState } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import LocationList from '../../components/lists/LocationList';
import OfficeToggleView from '../../components/toggles/OfficeViewTogglev2';
import OfficesLayout from '../../layouts/OfficesLayout';
import { officeList } from '../../mockUpData';

const Offices = () => {
  const [chosenLocation, setChosenLocation] = useState('INGEN');
  const [currentOffices, setCurrentOffices] = useState(officeList);
  const [toggleView, setToggleView] = useState(true);

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
    setCurrentOffices(filterOffices(officeList, chosenLocation));
  }, [chosenLocation]);

  const handleListToggle = () => {
    console.log('list');
    setToggleView(false);
  };

  const handleGridToggle = () => {
    console.log('grid');
    setToggleView(true);
  };

  return (
    <>
      <Jumbotron headerText="Våre kontorer" />
      <OfficesLayout>
        <OfficeToggleView
          handleListToggle={handleListToggle}
          handleGridToggle={handleGridToggle}
          toggleView={toggleView}
          locations={locations}
          chosenLocation={chosenLocation}
          setChosenLocation={setChosenLocation}
        />
        <LocationList locations={currentOffices} toggled={toggleView} />
      </OfficesLayout>
    </>
  );
};

export default Offices;
