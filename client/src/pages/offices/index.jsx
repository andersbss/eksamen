import React, { useState, useCallback } from 'react';
import Jumbotron from '../../components/Jumbotron';
import OfficeGrid from '../../components/OfficeGrid';
import OfficeList from '../../components/OfficeList';
import OfficeViewToggle from '../../components/OfficeViewToggle';
import { officeList } from '../../offices';

const Offices = () => {
  const [toggleView, setToggleView] = useState(false);

  const handleToggle = useCallback(() => setToggleView(!toggleView), [
    toggleView,
    setToggleView,
  ]);

  return (
    <>
      <Jumbotron headerText="Våre kontorer" />
      <OfficeViewToggle handleToggleView={handleToggle} />
      {toggleView && <OfficeGrid officeList={officeList} />}
      {!toggleView && <OfficeList officeList={officeList} />}
    </>
  );
};

export default Offices;
