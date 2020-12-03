import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.aside`
  float: right;
  margin: 35px;
`;

const OfficeViewToggle = ({ handleToggleView }) => (
  <StyledButtonContainer>
    <button type="button" onClick={handleToggleView}>
      Toggle View
    </button>
  </StyledButtonContainer>
);

export default OfficeViewToggle;
