import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';
import OfficeGridItem from '../items/OfficeGridItem';
import StyledOfficeMain from '../styledComponents/StyledOfficeMain';

const StyledGridContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const OfficeGridContainer = ({ offices }) => (
  <StyledOfficeMain>
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
            key={office.id}
            id={office.id}
            office={office.office}
            address={office.address}
            phone={office.phone}
            email={office.email}
          />
        ))
      )}
    </StyledGridContainer>
  </StyledOfficeMain>
);

export default OfficeGridContainer;
