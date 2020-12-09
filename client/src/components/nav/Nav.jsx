import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Error from '../errors/Error';
import { useUserContext } from '../../context/UserContext';
import { request } from '../../services/httpService';

const StyledHamburger = styled(FaBars)`
  display: none;
  color: black;

  @media ${(props) => props.theme.breakpoints.sm} {
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

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 20px;
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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

  @media ${(props) => props.theme.breakpoints.md} {
    column-gap: 20px;
    margin: auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;

    &.active {
      color: ${(props) => props.theme.colors.blue};
    }

    &:hover {
      transition: all 0.06s ease-in-out;
      color: #88d1e7;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 1.5rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 2rem;
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

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.2em;
      }
    }

    @media ${(props) => props.theme.breakpoints.md} {
      float: right;
      width: 100px;
    }
  }
`;

const Nav = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { setUser, loggedIn } = useUserContext();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const {
        data: { success, data },
      } = await request('POST', '/logout');

      if (success) {
        setLoading(false);
        setUser(null);
      } else {
        setLoading(false);
        setError(data);
      }
    } catch (error) {
      setLoading(false);
      setError({ success: false, data: 'Unexpected error occurred' });
    }
  };

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
          {loggedIn ? (
            <a onClick={handleLogout}>LOGG UT</a>
          ) : (
            <NavLink exact to="/logginn" activeClassName="active">
              LOGG INN
            </NavLink>
          )}
        </StyledLi>
      </StyledUl>
      {error && <Error error={error} />}
    </StyledNav>
  );
};

export default Nav;
