import React from 'react';
import styled from 'styled-components';
import MediumTitle from './titles/MediumTitle';
import OfficeGridItem from './OfficeGridItem';
import OfficeGridContainer from './OfficeGridContainer';

const OfficesGrid = ({ officeList }) => (
  <>
    {officeList.length <= 0 ? (
      <p>404</p>
    ) : (
      officeList.map((offices) => <OfficeGridContainer offices={offices} />)
    )}
  </>
);

export default OfficesGrid;
