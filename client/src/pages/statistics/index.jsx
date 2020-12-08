import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/buttons/Button';
import Jumbotron from '../../components/common/Jumbotron';
import StatisticsLayout from '../../layouts/StatisticsLayout';

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
`;

const Statistics = () => (
  <>
    <Jumbotron headerText="Statistikk" top="70" bottom="0" />
    <StatisticsLayout>
      <StyledLink exact to="/topartikler">
        Mest leste artikler
      </StyledLink>
      <StyledLink exact to="/artikkelvisninger">
        Visninger per artikkel
      </StyledLink>
      <StyledLink exact to="/brukervisninger">
        Artikkelvisninger per bruker
      </StyledLink>
      <Button content="Last ned brukeraktivitet" backgroundColor="blue" />
    </StatisticsLayout>
  </>
);

export default Statistics;
