import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/dateFormatter';
import Button from '../buttons/Button';
import StyledNavLink from '../common/LinkButton';

const StyledLi = styled.li`
  margin: 0;
  padding: 10px;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

const ArticleVisitsItem = ({ article }) => {
  console.log();

  return (
    <StyledLi>
      <h3>{article.title}</h3>
      <p>Visninger: {article.count}</p>
      <p>
        Av: {article.authorFirstName} {article.authorLastName}
      </p>
      <p>Publisert: {formatDate(article.createdAt)}</p>
      <StyledNavLink primary="true" exact to={`fagartikkel/${article._id}`}>
        TIL ARTIKKEL
      </StyledNavLink>
    </StyledLi>
  );
};

export default ArticleVisitsItem;
