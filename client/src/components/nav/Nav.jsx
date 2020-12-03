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

// Changed from text to p becuase of anoying error in console
const StyledName = styled.p`
  float: left;
  font-size: 2em;
`;

const Nav = () => (
  <StyledNav>
    <StyledName>FG</StyledName>
    <DesktopNav />
    <TabletNav />
  </StyledNav>
);
export default Nav;
