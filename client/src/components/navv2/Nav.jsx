import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledName = styled.p`
  margin: 0;
  margin-left: 50px;
  font-weight: 800;
  font-size: 2.2rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 2em;
    font-weight: 600;

    &.active {
      color: ${(props) => props.theme.colors.blue};
    }

    &:hover {
      transition: all 0.06s ease-in-out;
      color: #88d1e7;
    }
  }

  &:nth-child(5) {
    background-color: ${(props) => props.theme.colors.blue};
    width: 150px;

    & > a {
      color: ${(props) => props.theme.colors.white};
      font-size: 1.6em;
      font-weight: 500;
      text-justify: center;
      height: 100%;
      width: 100%;

      text-align: center;
      vertical-align: middle;
      line-height: 80px;
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
            LOGG INN
          </NavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
