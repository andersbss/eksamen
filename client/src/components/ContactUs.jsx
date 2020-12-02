import React from 'react';
import styled from 'styled-components';
import LargeTitle from './titles/LargeTitle';

const StyledSection = styled.section`
  margin: 20px;
  width: 100%;
  padding: 80px;
  background-color: ${(props) => props.theme.colors.grey};
  font-weight: bold;
`;

const ContactUs = ({ content }) => (
  <StyledSection>
    <LargeTitle content={content} />
  </StyledSection>
);
export default ContactUs;
