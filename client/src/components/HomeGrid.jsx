import React from 'react';
import styled from 'styled-components';
import MediumTitle from './titles/MediumTitle';

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr, 2fr;
  grid-template-rows: 1fr, 1fr;
  grid-gap: 25px;
  margin: 25px;
  text-align: center;
`;

const StyledSectionOffices = styled.section`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: 1;
  background-color: ${(props) => props.theme.colors.grey};
  height: 160px;
  padding: 35px 0px 35px 0px;
`;
const StyledSectionContact = styled.section`
  grid-column-start: 2;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: 1;
  background-color: ${(props) => props.theme.colors.grey};
  height: 160px;
  padding: 35px 0px 35px 0px;
`;

const StyledSectionArticles = styled.section`
  grid-column-start: 1;
  grid-column-end: span 3;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: ${(props) => props.theme.colors.grey};
  height: 160px;
  padding: 35px 0px 35px 0px;
`;

const HomeGrid = () => (
  <StyledGrid>
    <StyledSectionOffices>
      <MediumTitle content="Kontorer" />
    </StyledSectionOffices>
    <StyledSectionContact>
      <MediumTitle content="Kontakt" />
    </StyledSectionContact>
    <StyledSectionArticles>
      <MediumTitle content="Se våre fagartikler om oppussing av bad" />
    </StyledSectionArticles>
  </StyledGrid>
);
export default HomeGrid;
