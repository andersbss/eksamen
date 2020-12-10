import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledListItem = styled.li`
  margin-bottom: 30px;
  counter-increment: item;
  line-height: 30px;
  font-size: 1.8rem;
`;

const OfficeListItem = ({ id, office, address, phone, email }) => {
  const history = useHistory();

  const handleDetailClick = () => {
    if (id) {
      history.push(`/kontor/${id}`);
    }
  };

  return (
    <StyledListItem onClick={handleDetailClick}>
      <p>
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          {office}
        </span>
        &emsp;{address}
        &emsp;{phone}&emsp;{email}
      </p>
    </StyledListItem>
  );
};

OfficeListItem.propTypes = {
  id: number.isRequired,
  office: string.isRequired,
  address: string,
  phone: string,
  email: string,
};

export default OfficeListItem;
