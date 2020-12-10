import React from 'react';
import { string, number, shape } from 'prop-types';
import styled from 'styled-components';

const StyledEmployeeContainer = styled.section`
  width: 120px;
  margin: 10px;
`;

const StyledEmployeePicture = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.grey};
`;

const EmployeeItem = ({ navn, stilling }) => (
  <StyledEmployeeContainer>
    <StyledEmployeePicture />
    <p>
      {navn}
      <br />
      {stilling}
    </p>
  </StyledEmployeeContainer>
);

EmployeeItem.propTypes = {
  navn: string,
  stilling: string,
};

export default EmployeeItem;
