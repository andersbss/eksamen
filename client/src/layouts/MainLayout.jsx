import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Footer from '../components/footers/Footer';
import Button from '../components/buttons/Button';
import { useUserContext } from '../context/UserContext';

const StyledMainLayout = styled.div`
  min-height: 100%;

  & > button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 10px;
    margin-bottom: 10px;
  }
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
  const history = useHistory();

  return (
    <StyledMainLayout>
      <StyledHeader>
        <Nav />
      </StyledHeader>
      {isSuperAdmin && !userLoading && (
        <Button
          content="STATISTIKK"
          onClick={() => history.push('/statistikk')}
        />
      )}
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </StyledMainLayout>
  );
};

export default MainLayout;
