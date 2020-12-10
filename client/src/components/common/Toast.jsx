import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledToastContainer = styled.div`
  position: fixed;
  left: 50%;
  margin-left: auto;
  margin-right: auto;
  width: 480px;
  height: 115px;
  border-radius: 20px;
`;

const Toast = ({ header, content, duration }) => (
  <StyledToastContainer>
    <h3>{header}</h3>
    <p>{content}</p>
  </StyledToastContainer>
);

Toast.propTypes = {
  header: string,
  content: string,
  duration: string,
};

export default Toast;
