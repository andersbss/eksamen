import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../buttons/Button';
import SelectFilter from '../common/SelectFilter';
import Input from '../common/Input';

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
        <Button
          onClick={() => history.push('/nyartikkel')}
          content="NY ARTIKKEL"
          backgroundColor="blue"
          color="white"
        />
      )}

      <Input
        label="Søk på artikkeltittel"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Button content="SØK" onClick={handleSearch} disabled={!searchTerm} />

      <SelectFilter
        categories={categories}
        setChosenCategory={setChosenCategory}
        chosenCategory={chosenCategory}
      />
    </StyledSection>
  );
};

export default ArticlesToggles;
