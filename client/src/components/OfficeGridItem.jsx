import React from 'react';
import styled from 'styled-components';

const StyledGridItem = styled.div`
  border: 5px solid black;
  height: 200px;
  width: 200px;
  margin: 0px 25px 25px 25px;
`;

const OfficeGridItem = ({ office, address, phone, email }) => (
  <StyledGridItem>
    <p>{office}</p>
    <p>{address}</p>
    <p>{phone}</p>
    <p>{email}</p>
  </StyledGridItem>
);

export default OfficeGridItem;
