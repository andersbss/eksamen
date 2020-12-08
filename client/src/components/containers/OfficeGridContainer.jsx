import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';
import OfficeGridItem from '../items/OfficeGridItem';

const StyledGridContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledMain = styled.main`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;

  & > h2 {
    font-size: 4rem;
    font-weight: 1000;
    line-height: 0px;
  }
`;

const OfficeGridContainer = ({ offices }) => (
  <StyledMain>
    <MediumTitle
      content={`${offices.location} (${offices.offices.length} kontorer)`}
      style={{ textAlign: 'left' }}
    />
    <StyledGridContainer>
      {offices.offices.length <= 0 ? (
        <p>Ingen kontorer funnet i {offices.location}</p>
      ) : (
        offices.offices.map((office) => (
          <OfficeGridItem
            id={office.id}
            office={office.office}
            address={office.address}
            phone={office.phone}
            email={office.email}
          />
        ))
      )}
    </StyledGridContainer>
  </StyledMain>
);

export default OfficeGridContainer;
