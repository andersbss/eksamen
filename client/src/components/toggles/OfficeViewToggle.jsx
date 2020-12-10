import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const StyledButtonContainer = styled.aside`
  float: right;
  margin-right: 30px;
  display: flex;
`;

const StyledListIcon = styled.div`
  cursor: pointer;
`;

const StyledGridIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 38px;
  margin-left: 10px;
`;

const StyledGridPart = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: ${(props) =>
    props.gridColor === 'blue'
      ? props.theme.colors.blue
      : props.theme.colors.black};
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

const OfficeViewToggle = ({
  handleGridToggle,
  handleListToggle,
  gridColor,
  listColor,
}) => (
  <StyledButtonContainer>
    <StyledListIcon onClick={handleListToggle}>
      <StyledListPart listColor={listColor} />
      <StyledListPart listColor={listColor} />
      <StyledListPart listColor={listColor} />
    </StyledListIcon>
    <StyledGridIcon onClick={handleGridToggle}>
      <StyledGridPart gridColor={gridColor} />
      <StyledGridPart gridColor={gridColor} />
      <StyledGridPart gridColor={gridColor} />
      <StyledGridPart gridColor={gridColor} />
    </StyledGridIcon>
  </StyledButtonContainer>
);

OfficeViewToggle.propTypes = {
  handleGridToggle: func.isRequired,
  handleListToggle: func.isRequired,
  gridColor: string,
  listColor: string,
};

export default OfficeViewToggle;
