import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.grey};
  text-align: center;
  font-size: 14px;

  & > p {
    font-size: 1.2rem;
    line-height: 50px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Orgnr: 007 007 007&emsp;lg@lgror.no&emsp;99 00 00 00</p>
  </StyledFooter>
);

export default Footer;
