import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;

  & > p {
    font-size: 1.4rem;
    line-height: 50px;
    height: 100%;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Orgnr: 007 007 007&emsp;lg@lgror.no&emsp;99 00 00 00</p>
  </StyledFooter>
);

export default Footer;
