import styled from 'styled-components';

const StyledSelect = styled.select`
  font-size: ${(props) => props.theme.fonts.sizes.button};
  font-weight: ${(props) => props.theme.fonts.weights.button};
  height: 85px;
  width: 200px;
  border: 0;
  background-color: ${(props) => props.theme.colors.lightGrey};
  text-align-last: center;
  float: right;
  margin-right: 15px;

  cursor: pointer;

  option {
    font-size: 1.5rem;
    margin: auto;
    &:nth-child(1) {
      display: ${(props) => (props.optionSelected ? 'none' : 'block')};
    }
  }
`;

export default StyledSelect;
