import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  height: 180px;

  display: grid;
  grid-template-columns: 200px 5fr 1fr;
  grid-template-rows: 70px 1fr;
  grid-column-gap: 30px;

  & > div:nth-child(1) {
    grid-row: span 2;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    line-height: 30px;

    & > h1 {
      margin: 0;
      vertical-align: middle;
    }

    & > h3 {
      margin: 0;
      padding: 0;
      text-align: center;
      vertical-align: middle;
    }

    grid-column: 2 / 4;
  }

  & > p {
    margin: 0;
    grid-column: 2 / 4;
    grid-row: 2;
  }
`;

const FallbackImage = styled.div`
  background-color: grey;
`;

const ArticleItem = ({ title, ingress, categoryTitle }) => {
  console.log();
  return (
    <StyledLi>
      <FallbackImage />
      <div>
        <h1>{title}</h1>
        <h3>{categoryTitle}</h3>
      </div>

      <p>{ingress}</p>
    </StyledLi>
  );
};

export default ArticleItem;
