import React, { useState } from 'react';
import styled from 'styled-components';
import Jumbotron from '../../components/common/Jumbotron';
import OfficeGrid from '../../components/grids/OfficeGrid';
import OfficeList from '../../components/lists/OfficeList';
import OfficeViewToggle from '../../components/toggles/OfficeViewToggle';
import { officeList } from '../../mockUpData';

const StyledContainer = styled.main`
  margin-top: 140px;
`;

const Offices = () => {
  const [toggleView, setToggleView] = useState(true);

  const handleListToggle = () => {
    setToggleView(false);
  };
  const handleGridToggle = () => {
    setToggleView(true);
  };

  return (
    <>
      <Jumbotron headerText="Våre kontorer" />
      <StyledContainer>
        <OfficeViewToggle
          handleGridToggle={handleGridToggle}
          handleListToggle={handleListToggle}
          gridColor={toggleView ? 'blue' : ''}
          listColor={toggleView ? '' : 'blue'}
        />
        {toggleView && <OfficeGrid officeList={officeList} />}
        {!toggleView && <OfficeList officeList={officeList} />}
      </StyledContainer>
    </>
  );
};

export default Offices;
