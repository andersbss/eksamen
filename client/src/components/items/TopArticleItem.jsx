import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/dateFormatter';
import Button from '../buttons/Button';

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  box-shadow: 0px 5px 13px -11px #000000;

  & > h3 {
    margin: 0;

    text-align: center;
    vertical-align: middle;
    line-height: 80px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > p {
    padding: 0;
    margin: 0;

    text-align: center;
    vertical-align: middle;
    line-height: 80px;
  }
`;

const TopArticleItem = ({ article }) => {
  console.log();

  return (
    <StyledLi>
      <h3>{article.title}</h3>
      <p>Visninger: {article.count}</p>
      <p>
        Av: {article.authorFirstName} {article.authorLastName}
      </p>
      <p>Publisert: {formatDate(article.createdAt)}</p>
      <Button content="Les artikkel" backgroundColor="blue" />
    </StyledLi>
  );
};

export default TopArticleItem;
