import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const StyledHamburger = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    margin: auto;
    height: ${(props) => (props.visible ? '500px' : '55px')};
    flex-direction: ${(props) => props.visible && 'column'};
  }
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

  @media screen and (max-width: 800px) {
    margin: ${(props) => props.visible && '40px'};
    display: ${(props) => props.visible && 'inline-block'};
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 30px;

  @media screen and (max-width: 800px) {
    display: ${(props) => (props.visible ? 'grid' : 'none')};

    margin: auto;
    margin-top: -30px;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
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

    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledNav visible={isVisible}>
      <StyledHamburger onClick={() => setIsVisible(!isVisible)} />
      <StyledName visible={isVisible}>FG</StyledName>
      <StyledUl visible={isVisible}>
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
