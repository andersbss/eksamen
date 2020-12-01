import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MediumTitle from '../titles/MediumTitle';

const StyledNav = styled.nav`
  margin: 0;
  width: 100%;
  font-weight: bolder;
  height: 60px;
  padding: 15px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  float: right;
`;

const StyledLi = styled.li`
  font-size: 2em;
  margin-left: 20px;
  color: black;

  & > a {
    text-decoration: none;

    &:visited {
      color: black;
    }
    &.active {
      color: ${(props) => props.theme.colors.blue};
      border-bottom: 4px solid ${(props) => props.theme.colors.blue};
    }
  }
`;

const StyledName = styled.div`
  float: left;
  font-size: 2em;
`;

const Nav = () => (
  <StyledNav>
    <StyledName>FG</StyledName>
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
    </StyledUl>
  </StyledNav>
);
export default Nav;
