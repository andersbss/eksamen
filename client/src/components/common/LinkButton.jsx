import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  background: ${(props) =>
    props.primary ? props.theme.colors.blue : props.theme.colors.grey};
  color: ${(props) =>
    props.primary ? props.theme.colors.white : props.theme.colors.black};
  margin: ${(props) => (props.center ? 'auto' : 0)};

  font-size: ${(props) => props.theme.fonts.sizes.button};
  font-weight: ${(props) => props.theme.fonts.weights.button};

  text-decoration: none;
  height: 85px;
  width: 200px;

  text-align: center;
  vertical-align: middle;
  line-height: 85px;
`;

export default StyledNavLink;
