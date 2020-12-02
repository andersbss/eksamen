import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';
import OfficeListItem from '../items/OfficeListItem';

const StyledUl = styled.ol`
  list-style: none;
  counter-reset: item;

  & > li {
    &:before {
      content: counter(item);
      margin-right: 10px;
      width: 35px;
      height: 35px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background-color: black;
      border-radius: 15%;
      color: white;
      float: left;
    }
  }
`;

const OfficeListContainer = ({ offices }) => (
  <>
    <MediumTitle
      content={`${offices.location} (${offices.offices.length} kontorer)`}
    />
    <StyledUl>
      {offices.offices.length <= 0 ? (
        <p>Ingen kontorer funnet i {offices.location}</p>
      ) : (
        offices.offices.map((office) => (
          <OfficeListItem
            id={office.id}
            office={office.office}
            address={office.address}
            phone={office.phone}
            email={office.email}
          />
        ))
      )}
    </StyledUl>
  </>
);

export default OfficeListContainer;
