import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../buttons/Button';
import SelectFilter from '../common/SelectFilter';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  & > button:nth-child(${(props) => (props.isAdmin ? 2 : 1)}) {
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
      <Button content="SØK" />
      <SelectFilter
        categories={categories}
        setChosenCategory={setChosenCategory}
        chosenCategory={chosenCategory}
      />
    </StyledSection>
  );
};

export default ArticlesToggles;
