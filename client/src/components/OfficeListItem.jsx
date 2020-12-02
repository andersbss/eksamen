import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  margin-bottom: 30px;
  counter-increment: item;
`;

const OfficeListItem = ({ office, address, phone, email }) => (
  <StyledListItem>
    <p>
      {office}&emsp;{address}
      &emsp;{phone}&emsp;{email}
    </p>
  </StyledListItem>
);

export default OfficeListItem;
