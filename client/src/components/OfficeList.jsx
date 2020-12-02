import React from 'react';
import OfficeListContainer from './OfficeListContainer';

const OfficeList = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>404</p>
    ) : (
      officeList.map((offices) => <OfficeListContainer offices={offices} />)
    )}
  </>
);

export default OfficeList;
