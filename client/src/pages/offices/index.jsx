import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import OfficesGrid from '../../components/OfficeGrid';
import { officeList } from '../../offices';

const Offices = () => (
  <>
    <Jumbotron headerText="Våre kontorer" />
    <OfficesGrid officeList={officeList} />
  </>
);

export default Offices;
