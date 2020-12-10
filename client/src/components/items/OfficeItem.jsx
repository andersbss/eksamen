import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { bool, shape, string } from 'prop-types';

const StyledLi = styled.li`
  border: ${(props) =>
    props.toggled ? `solid 2px ${props.theme.colors.grey}` : 'none'};
  padding: ${(props) => (props.toggled ? '20px' : '10px')};
  display: ${(props) => (props.toggled ? 'block' : 'flex')};

  line-height: 20px;
  cursor: pointer;

  & > p {
    margin: 0;
    margin-right: ${(props) => (props.toggled ? '0px' : '20px')};

    &:nth-child(1) {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.black};

      height: 20px;
      font-size: 1.5rem;
      margin-right: 20px;
      text-align: center;
      width: 20px;
    }
  }

  & > h3 {
    margin: 0;
    margin-bottom: 10px;
    margin-right: ${(props) => (props.toggled ? '0px' : '20px')};
  }
`;

const OfficeItem = ({ office, toggled }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/kontor/${office.id}`);
  };

  return (
    <StyledLi toggled={toggled} onClick={handleClick}>
      {!toggled && <p>{office.id}</p>}
      <h3>{office.office}</h3>
      <p>{office.address}</p>
      <p>{office.phone}</p>
      <p>{office.email}</p>
    </StyledLi>
  );
};

OfficeItem.propTypes = {
  office: shape({
    office: string,
    address: string,
    phone: string,
    email: string,
  }),
  toggled: bool,
};

export default OfficeItem;
