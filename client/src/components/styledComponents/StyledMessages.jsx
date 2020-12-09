import styled from 'styled-components';

export const StyledSuccessMessage = styled.span`
  text-align: center;
  color: green;

  & > p {
    font-weight: 800;

    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

export const StyledErrorMessage = styled.span`
  text-align: center;
  color: red;

  & > p {
    font-weight: 800;

    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;
