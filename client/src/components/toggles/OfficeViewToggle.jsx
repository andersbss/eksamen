import React from 'react';
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
  background-color: black;
`;

const StyledListPart = styled.div`
  width: 36px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;

const OfficeViewToggle = ({ handleGridToggle, handleListToggle }) => (
  <StyledButtonContainer>
    <StyledListIcon onClick={handleListToggle}>
      <StyledListPart />
      <StyledListPart />
      <StyledListPart />
    </StyledListIcon>
    <StyledGridIcon onClick={handleGridToggle}>
      <StyledGridPart />
      <StyledGridPart />
      <StyledGridPart />
      <StyledGridPart />
    </StyledGridIcon>
  </StyledButtonContainer>
);

export default OfficeViewToggle;
