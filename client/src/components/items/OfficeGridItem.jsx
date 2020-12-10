import React from 'react';
import { string, number, shape } from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledGridItem = styled.div`
  border: 2px solid gray;
  height: 170px;
  width: 340px;
  margin: 20px 60px 20px 10px;
  padding: 15px 20px 10px 20px;
  line-height: 8px;

  & > button {
    margin: auto;
    display: block;
  }

  & > p {
    font-weight: 420;
    font-size: 1.7rem;
  }

  cursor: pointer;
`;

const OfficeGridItem = ({ id, office, address, phone, email }) => {
  const history = useHistory();

  const handleDetailClick = () => {
    if (id) {
      history.push(`/kontor/${id}`);
    }
  };
  return (
    <StyledGridItem onClick={handleDetailClick}>
      <h3>{office}</h3>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </StyledGridItem>
  );
};

OfficeGridItem.propTypes = {
  id: number.isRequired,
  office: string.isRequired,
  address: string,
  phone: string,
  email: string,
};

export default OfficeGridItem;
