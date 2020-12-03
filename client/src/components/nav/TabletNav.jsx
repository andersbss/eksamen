import React, { useState, useCallback, useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const StyledHamburgerUl = styled.ul`
  position: absolute;
  width: 120px;
  top: 60px;
  right: 8px;
  padding: 10px;
  background-color: white;
  list-style-type: none;
  border-radius: 8%;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  @media screen and (min-width: 800px) {
    visibility: hidden;
    opacity: 0;
  }

  @media screen and (max-width: 500px) {
    height: 10%;
    width: 96%;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 300px) {
    height: 15%;
  }
`;

const StyledHamburgerLi = styled.li`
  font-size: 1.6em;
  color: black;

  @media screen and (max-width: 500px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &:not(:last-child) {
    padding-bottom: 12px;
  }
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

const TabletNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const themeContext = useContext(ThemeContext);
  const { visible, hidden } = themeContext;

  const handleMenuToggle = useCallback(() => setShowMenu(!showMenu), [
    showMenu,
    setShowMenu,
  ]);

  // Updates windowWidth when window is resized.
  useEffect(() => {
    const handleSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('sizeChange', handleSizeChange);
    return () => window.removeEventListener('sizeChange', handleSizeChange);
  }, [windowWidth]);

  // Removes opened tablet navigation when window width > 800px
  useEffect(() => {
    windowWidth > 800 && setShowMenu(false);
  }, [windowWidth]);

  return (
    <>
      <StyledHamburger onClick={handleMenuToggle} />
      <StyledHamburgerUl style={showMenu ? visible : hidden}>
        <StyledHamburgerLi>
          <NavLink exact to="/hjem" activeClassName="active">
            Hjem
          </NavLink>
        </StyledHamburgerLi>
        <StyledHamburgerLi>
          <NavLink exact to="/kontorer" activeClassName="active">
            Kontorer
          </NavLink>
        </StyledHamburgerLi>
        <StyledHamburgerLi>
          <NavLink exact to="/fagartikler" activeClassName="active">
            Fagartikler
          </NavLink>
        </StyledHamburgerLi>
        <StyledHamburgerLi>
          <NavLink exact to="/kontakt" activeClassName="active">
            Kontakt
          </NavLink>
        </StyledHamburgerLi>
      </StyledHamburgerUl>
    </>
  );
};

export default TabletNav;
