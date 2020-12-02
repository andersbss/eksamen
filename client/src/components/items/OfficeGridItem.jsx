import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledGridItem = styled.div`
  border: 5px solid black;
  height: 220px;
  width: 275px;
  margin: 0px 25px 25px 25px;

  & > button {
    margin: auto;
    display: block;
  }
`;

const OfficeGridItem = ({ id, office, address, phone, email }) => {
  const history = useHistory();

  const handleDetailClick = () => {
    if (id) {
      history.push(`/kontor/${id}`);
    }
  };
  return (
    <StyledGridItem>
      <h3>{office}</h3>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <button onClick={handleDetailClick}>Mer info</button>
    </StyledGridItem>
  );
};

export default OfficeGridItem;
