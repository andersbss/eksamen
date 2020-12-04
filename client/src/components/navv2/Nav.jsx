import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledName = styled.p`
  margin: 0;
  padding: 0;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 30px;
`;

const StyledLi = styled.li`
  list-style: none;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 2em;
    font-weight: 600;

    &.active {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const Nav = () => {
  console.log();

  return (
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
        <StyledLi>
          <NavLink exact to="/logginn" activeClassName="active">
            Logg inn
          </NavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
