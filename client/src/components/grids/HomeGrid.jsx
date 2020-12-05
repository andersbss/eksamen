import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';

const StyledDefaultHomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h2 {
    margin: 0;
    font-size: 4rem;
    font-weight: 900;
  }
`;

const StyledSectionOffices = styled(StyledDefaultHomeSection)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: 1;
  background-color: ${(props) => props.theme.colors.grey};
  height: 300px;
`;

const StyledSectionContact = styled(StyledDefaultHomeSection)`
  grid-column-start: 2;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: 1;
  background-color: ${(props) => props.theme.colors.grey};
  height: 300px;
`;

const StyledSectionArticles = styled(StyledDefaultHomeSection)`
  grid-column-start: 1;
  grid-column-end: span 3;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: ${(props) => props.theme.colors.grey};
  height: 350px;
`;

const HomeGrid = () => (
  <>
    <StyledSectionOffices>
      <MediumTitle content="Kontorer" />
    </StyledSectionOffices>
    <StyledSectionContact>
      <MediumTitle content="Kontakt" />
    </StyledSectionContact>
    <StyledSectionArticles>
      <MediumTitle content="Se våre fagartikler om oppussing av bad" />
    </StyledSectionArticles>
  </>
);
export default HomeGrid;
