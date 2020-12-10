import React from 'react';
import { array } from 'prop-types';
import OfficeListContainer from '../containers/OfficeListContainer';

const OfficeList = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>Ingen kontorer funnet. Vennligst prøv igjen senere.</p>
    ) : (
      officeList.map((offices, index) => (
        <OfficeListContainer key={index} offices={offices} />
      ))
    )}
  </>
);

OfficeList.propTypes = {
  officeList: array.isRequired,
};

export default OfficeList;
