import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0;
  width: 100%;
`;

const StyledUl = styled.nav`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const StyledLi = styled.li`
  font-size: 2em;
  margin-left: 20px;

  & > a {
    text-decoration: none;
  }
`;

const Nav = () => (
  <StyledNav>
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
