import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SelectFilter from '../common/CategorySelectFilter';
import Input from '../common/Input';
import StyledNavLink from '../styledComponents/StyledLinkButton';
import Button from '../styledComponents/StyledButton';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  & > select {
    margin-left: 20px;
  }
  & > :nth-child(${(props) => (props.isAdmin ? 2 : 1)}) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const ArticlesToggles = ({
  loggedIn,
  isAdmin,
  categories,
  setChosenCategory,
  chosenCategory,
  setSearchTerm,
  searchTerm,
  handleSearch,
}) => {
  const history = useHistory();

  return (
    <StyledSection isAdmin={isAdmin}>
      {loggedIn && isAdmin && (
        <StyledNavLink primary="true" exact to="/nyartikkel">
          NY ARTIKKEL
        </StyledNavLink>
      )}

      <Input
        label="Søk på artikkeltittel"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Button onClick={handleSearch}>SØK</Button>

      <SelectFilter
        categories={categories}
        setChosenCategory={setChosenCategory}
        chosenCategory={chosenCategory}
      />
    </StyledSection>
  );
};

export default ArticlesToggles;
