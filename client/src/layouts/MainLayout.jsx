import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Footer from '../components/footers/Footer';
import StyledLinkButton from '../components/styledComponents/StyledLinkButton';
import { useUserContext } from '../context/UserContext';

const StyledMainLayout = styled.div`
  min-height: 100%;
`;

const StyledNavLink = styled(StyledLinkButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  z-index: 1;
  box-shadow: 0px -2px 15px -1px rgba(0, 0, 0, 0.54);
`;

const StyledContainer = styled.div`
  min-height: 100%;
  min-height: calc(100vh - 100px);
`;

const MainLayout = ({ children }) => {
  const { userLoading, isSuperAdmin } = useUserContext();

  return (
    <StyledMainLayout>
      <StyledHeader>
        <Nav />
      </StyledHeader>
      {isSuperAdmin && !userLoading && (
        <StyledNavLink exact to="/statistikk">
          STATISTIKK
        </StyledNavLink>
      )}
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </StyledMainLayout>
  );
};

MainLayout.propTypes = {
  children: node,
};

export default MainLayout;
