import React from 'react';
import styled from 'styled-components';
import MediumTitle from './titles/MediumTitle';
import OfficeGridItem from './OfficeGridItem';

const StyledGridContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const OfficeGridContainer = ({ offices }) => (
  <>
    <MediumTitle
      content={`${offices.location} (${offices.offices.length} kontorer)`}
    />
    <StyledGridContainer>
      {offices.offices.length <= 0 ? (
        <p>Ingen kontorer funnet i {offices.location}</p>
      ) : (
        offices.offices.map((office) => (
          <OfficeGridItem
            office={office.office}
            address={office.address}
            phone={office.phone}
            email={office.email}
          />
        ))
      )}
    </StyledGridContainer>
  </>
);

export default OfficeGridContainer;
