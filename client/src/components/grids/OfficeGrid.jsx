import React from 'react';
import OfficeGridContainer from '../containers/OfficeGridContainer';

const OfficeGrid = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>Ingen kontorer funnet. Vennligst prøv igjen senere.</p>
    ) : (
      officeList.map((offices, index) => (
        <OfficeGridContainer key={index} offices={offices} />
      ))
    )}
  </>
);

export default OfficeGrid;
