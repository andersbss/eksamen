import React from 'react';
import styled from 'styled-components';
import OfficeItem from '../items/OfficeItem';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: ${(props) => (props.toggled ? 'grid' : 'flex')};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 120px;
  row-gap: ${(props) => (props.toggled ? '60px' : '20px')};

  flex-direction: column;
`;

const OfficeList = ({ location, toggled }) => (
  <StyledUl toggled={toggled}>
    {location.offices.map((office, index) => (
      <OfficeItem toggled={toggled} key={index} office={office} />
    ))}
  </StyledUl>
);

export default OfficeList;
