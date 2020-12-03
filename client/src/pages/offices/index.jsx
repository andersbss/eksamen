import React, { useState } from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import OfficeGrid from '../../components/grids/OfficeGrid';
import OfficeList from '../../components/lists/OfficeList';
import OfficeViewToggle from '../../components/options/OfficeViewToggle';
import { officeList } from '../../mockUpData';

const Offices = () => {
  const [toggleView, setToggleView] = useState(false);

  const handleToggle = () => {
    setToggleView((prev) => !prev);
  };

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
