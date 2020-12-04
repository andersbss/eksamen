import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  float: right;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledLi = styled.li`
  font-size: 2em;
  margin-left: 20px;
  color: black;
  transition: all 0.2s ease-in-out;

  & > a {
    text-decoration: none;

    &:visited {
      color: black;
    }
    &.active {
      color: ${(props) => props.theme.colors.blue};
    }

    &:hover {
      transition: all 0.2s ease-in-out;
      color: #88d1e7;
    }
  }
`;

const DesktopNav = () => (
  <StyledUl>
    <StyledLi>
      <NavLink exact to="/hjem" activeClassName="active">
        Hjem
      </NavLink>
    </StyledLi>
    <StyledLi>
      <NavLink exact to="/kontorer" activeClassName="active">
        Kontorer
      </NavLink>
    </StyledLi>
    <StyledLi>
      <NavLink exact to="/fagartikler" activeClassName="active">
        Fagartikler
      </NavLink>
    </StyledLi>
    <StyledLi>
      <NavLink exact to="/kontakt" activeClassName="active">
        Kontakt
      </NavLink>
    </StyledLi>
    <StyledLi>
      <NavLink exact to="/logginn" activeClassName="active">
        Logg inn
      </NavLink>
    </StyledLi>
  </StyledUl>
);

export default DesktopNav;
