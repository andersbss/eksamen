import React from 'react';
import styled from 'styled-components';
import Nav from '../components/navv2/Nav';
import Footer from '../components/footers/Footer';

const StyledMainLayout = styled.div`
  min-height: 100%;
`;

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  z-index: 1;
  box-shadow: 0px -2px 15px -1px rgba(0, 0, 0, 0.54);

  border: solid;
`;

const StyledContainer = styled.div`
  min-height: 100%;
  min-height: calc(100vh - 100px);
`;

const MainLayout = ({ children }) => (
  <StyledMainLayout>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <StyledContainer>{children}</StyledContainer>
    <Footer />
  </StyledMainLayout>
);

export default MainLayout;
