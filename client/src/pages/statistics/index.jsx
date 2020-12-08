import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Jumbotron from '../../components/common/Jumbotron';

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 2rem;
  border: solid;
`;

const Statistics = () => (
  <>
    <Jumbotron headerText="Statistikk" top="70" bottom="0" />
    <StyledLink exact to="/topartikler">
      Mest leste artikler
    </StyledLink>
  </>
);

export default Statistics;
