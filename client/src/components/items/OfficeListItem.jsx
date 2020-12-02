import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledListItem = styled.li`
  margin-bottom: 30px;
  counter-increment: item;

  & > p > button {
    margin-left: 20px;
    width: 70px;
    height: 20px;
    font-size: 1.2rem;
  }
`;

const OfficeListItem = ({ id, office, address, phone, email }) => {
  const history = useHistory();

  const handleDetailClick = () => {
    if (id) {
      history.push(`/kontor/${id}`);
    }
  };

  return (
    <StyledListItem>
      <p>
        {office}&emsp;{address}
        &emsp;{phone}&emsp;{email}
        <button onClick={handleDetailClick}>Mer info</button>
      </p>
    </StyledListItem>
  );
};

export default OfficeListItem;
