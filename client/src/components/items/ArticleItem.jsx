import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Image from '../images/Image';

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  height: 180px;

  display: grid;
  grid-template-columns: 200px 5fr 1fr;
  grid-template-rows: 70px 1fr;
  grid-column-gap: 30px;

  cursor: pointer;

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

    max-width: 200ch;
  }
`;

export const FallbackImage = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const ArticleItem = ({ title, ingress, categoryTitle, id, image }) => {
  const history = useHistory();

  const handleArticleClick = () => {
    history.push(`/fagartikkel/${id}`);
  };

  return (
    <StyledLi onClick={handleArticleClick}>
      {image ? (
        <Image imageId={image} height="200px" width="200px" />
      ) : (
        <FallbackImage />
      )}
      <span>
        <h1>{title}</h1>
        <h4>{categoryTitle}</h4>
      </span>
      {ingress && (
        <p>
          {ingress.length > 200 ? `${ingress.substring(0, 200)}...` : ingress}
        </p>
      )}
    </StyledLi>
  );
};

ArticleItem.propTypes = {
  title: string.isRequired,
  ingress: string,
  categoryTitle: string,
  id: string.isRequired,
  image: string,
};

export default ArticleItem;
