import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayouts/BaseLayout';

const StyledMain = styled(BaseLayout)`
  width: 800px;
`;

const ContactLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default ContactLayout;
