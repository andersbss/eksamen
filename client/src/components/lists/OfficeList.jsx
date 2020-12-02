import React from 'react';
import OfficeListContainer from '../containers/OfficeListContainer';

const OfficeList = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>Ingen kontorer funnet. Vennligst prøv igjen senere.</p>
    ) : (
      officeList.map((offices) => <OfficeListContainer offices={offices} />)
    )}
  </>
);

export default OfficeList;
