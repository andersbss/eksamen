import React from 'react';
import styled from 'styled-components';
import OfficeSelectFilter from '../common/OfficeSelectFilter';

const StyledToggleContainer = styled.span`
  margin-left: auto;
  margin-top: 50px;
  display: flex;
`;

const StyledButtonContainer = styled.div`
  margin-right: 30px;
  display: flex;
`;

const StyledListIcon = styled.div`
  cursor: pointer;

  & > div {
    background-color: ${(props) =>
      !props.toggleView ? props.theme.colors.blue : props.theme.colors.black};
  }
`;

const StyledGridIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 38px;
  margin-left: 10px;

  & > div {
    background-color: ${(props) =>
      props.toggleView ? props.theme.colors.blue : props.theme.colors.black};
  }
`;

const StyledGridPart = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: ${(props) =>
    props.gridColor === 'blue'
      ? props.theme.colors.blue
      : props.theme.colors.black};

  &:nth-child(3) {
    margin-top: -30px;
  }
  &:nth-child(4) {
    margin-top: -30px;
  }
`;

const StyledListPart = styled.div`
  width: 36px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  background-color: ${(props) =>
    props.listColor === 'blue'
      ? props.theme.colors.blue
      : props.theme.colors.black};
`;

const OfficeToggleView = ({
  handleListToggle,
  handleGridToggle,
  locations,
  chosenLocation,
  setChosenLocation,
  toggleView,
}) => {
  console.log();
  return (
    <StyledToggleContainer>
      <OfficeSelectFilter
        locations={locations}
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
      />
      <StyledButtonContainer>
        <StyledListIcon onClick={handleListToggle} toggleView={toggleView}>
          <StyledListPart />
          <StyledListPart />
          <StyledListPart />
        </StyledListIcon>
        <StyledGridIcon onClick={handleGridToggle} toggleView={toggleView}>
          <StyledGridPart />
          <StyledGridPart />
          <StyledGridPart />
          <StyledGridPart />
        </StyledGridIcon>
      </StyledButtonContainer>
    </StyledToggleContainer>
  );
};

export default OfficeToggleView;
