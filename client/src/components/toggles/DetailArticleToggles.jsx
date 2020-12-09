import React from 'react';
import styled from 'styled-components';
import StyledButton from '../styledComponents/StyledButton';
import StyledLinkButton from '../styledComponents/StyledLinkButton';

const StyledSection = styled.section`
  display: flex;
`;

const Button = styled(StyledButton)`
  margin-right: 20px;
  background-color: ${(props) => props.theme.colors.red};
`;

const NavLink = styled(StyledLinkButton)`
  background-color: ${(props) => props.theme.colors.green};
`;

const DetailArticleToggles = ({ handleDelete, deleteLoading, id }) => (
  <StyledSection>
    <Button
      primary="true"
      disabled={deleteLoading}
      onClick={() => handleDelete()}
    >
      {deleteLoading ? 'SLETTER...' : 'SLETT'}
    </Button>
    <NavLink primary="true" exact to={`/redigerartikkel/${id}`}>
      REDIGER
    </NavLink>
  </StyledSection>
);

export default DetailArticleToggles;
