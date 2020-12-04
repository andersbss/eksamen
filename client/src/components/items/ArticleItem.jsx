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

  & > div {
    grid-row: span 2;
  }

  & > span {
    display: flex;
    justify-content: space-between;
    line-height: 32px;

    & > h1 {
      margin: 0;
      vertical-align: middle;
    }

    & > h4 {
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
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const ArticleItem = ({ title, ingress, categoryTitle, image }) => {
  console.log();
  // Replaced the truthy result with actual image later
  return (
    <StyledLi>
      {image ? <FallbackImage /> : <FallbackImage />}
      <span>
        <h1>{title}</h1>
        <h4>{categoryTitle}</h4>
      </span>
      <p>{ingress}</p>
    </StyledLi>
  );
};

export default ArticleItem;
