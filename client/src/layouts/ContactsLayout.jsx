import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  width: 800px;
  display: grid;
  grid-row-gap: 20px;
`;

const ContactsLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default ContactsLayout;
