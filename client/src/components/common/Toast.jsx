import React from 'react';
import styled from 'styled-components';

const StyledToastContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100px;
`;

const Toast = ({ header, content, duration }) => (
  <StyledToastContainer>
    <h3>{header}</h3>
    <p>{content}</p>
  </StyledToastContainer>
);

export default Toast;
