import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Footer from '../components/footers/Footer';

const StyledMainLayout = styled.div``;

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
`;

const StyledContainer = styled.div``;

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
