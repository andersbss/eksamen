import React from 'react';
import OfficeGridContainer from './OfficeGridContainer';

const OfficeGrid = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>404</p>
    ) : (
      officeList.map((offices) => <OfficeGridContainer offices={offices} />)
    )}
  </>
);

export default OfficeGrid;
