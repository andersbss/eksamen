import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 800px;

  display: grid;
  grid-row-gap: 20px;
`;

const ContactsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default ContactsLayout;
