import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeItem from './items/EmployeeItem';
import { employeesList } from '../mockUpData';

const StyledEmployeeContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
`;

const Employees = ({ officeId }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = (officeId) => {
      employeesList.forEach((element) => {
        if (element.officeId === parseInt(officeId)) {
          setEmployees(element.employees);
        }
      });
    };
    if (officeId) {
      getEmployees(officeId);
    }
  }, [officeId]);

  return (
    <StyledEmployeeContainer>
      {employees.length <= 0 ? (
        <p>Ingen ansatte</p>
      ) : (
        employees.map((employee) => (
          <EmployeeItem navn={employee.navn} stilling={employee.stilling} />
        ))
      )}
    </StyledEmployeeContainer>
  );
};
export default Employees;
