import React from 'react';
import styled from 'styled-components';
import { string, number, shape, bool, array, func } from 'prop-types';
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
  handleSearch,
}) => (
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

ArticlesToggles.propTypes = {
  loggedIn: bool,
  isAdmin: bool,
  categories: array.isRequired,
  setChosenCategory: func.isRequired,
  chosenCategory: string,
  setSearchTerm: func.isRequired,
  handleSearch: func.isRequired,
};

export default ArticlesToggles;
