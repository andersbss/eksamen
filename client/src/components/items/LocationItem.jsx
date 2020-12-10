import React from 'react';
import styled from 'styled-components';
import OfficeList from '../lists/OfficeList';

const StyledLi = styled.li`
  & > h2 {
    font-weight: 900;
    font-size: 4rem;
  }
`;

const OfficeItem = ({ location, count, toggled }) => (
  <StyledLi>
    <h2>
      {location.location}
      {` (${count} kontorer)`}
    </h2>
    <OfficeList toggled={toggled} location={location} />
  </StyledLi>
);

export default OfficeItem;
