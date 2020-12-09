import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';
import OfficeListItem from '../items/OfficeListItem';
import StyledOfficeMain from '../styledComponents/StyledOfficeMain';

const StyledUl = styled.ol`
  list-style: none;
  counter-reset: item;
  margin-top: 60px;
  padding-left: 0px;

  & > li {
    &:before {
      content: counter(item);
      margin-right: 10px;
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background-color: black;
      border-radius: 5%;
      color: white;
      float: left;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

const OfficeListContainer = ({ offices }) => (
  <StyledOfficeMain>
    <MediumTitle
      content={`${offices.location} (${offices.offices.length} kontorer)`}
      style={{ textAlign: 'left' }}
    />
    <StyledUl>
      {offices.offices.length <= 0 ? (
        <p>Ingen kontorer funnet i {offices.location}</p>
      ) : (
        offices.offices.map((office) => (
          <OfficeListItem
            key={office.id}
            id={office.id}
            office={office.office}
            address={office.address}
            phone={office.phone}
            email={office.email}
          />
        ))
      )}
    </StyledUl>
  </StyledOfficeMain>
);

export default OfficeListContainer;
