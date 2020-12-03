import React from 'react';
import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import TabletNav from './TabletNav';

const StyledNav = styled.nav`
  margin: 0;
  font-weight: bolder;
  height: 80px;
  padding: 15px;
`;

const StyledName = styled.div`
  float: left;
  font-size: 2em;
`;

const Nav = () => (
  <StyledNav>
    <StyledName>FG</StyledName>
    <DesktopNav />
    <TabletNav />
    <button>Logg inn</button>
  </StyledNav>
);
export default Nav;
