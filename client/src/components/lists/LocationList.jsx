import React from 'react';
import styled from 'styled-components';
import LocationItem from '../items/LocationItem';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LocationList = ({ locations, toggled }) => (
  <StyledUl>
    {locations.map((location, index) => (
      <LocationItem
        key={index}
        count={location.offices.length}
        location={location}
        toggled={toggled}
      />
    ))}
  </StyledUl>
);

export default LocationList;
