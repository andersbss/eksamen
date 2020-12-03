import React from 'react';
import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import TabletNav from './TabletNav';

const StyledNav = styled.nav`
  margin: 0;
  font-weight: bolder;
  height: 60px;
  padding: 15px;
`;

const StyledName = styled.text`
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
