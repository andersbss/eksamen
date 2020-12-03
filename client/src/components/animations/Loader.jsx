import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// Inspired by: https://www.w3schools.com/howto/howto_css_loader.asp
const StyledLoader = styled.div`
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);

  margin: auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  margin-bottom: 15px;
  border-top: 16px solid ${(props) => props.theme.colors.blue};

  width: 120px;
  height: 120px;
  animation: ${Spin} 2s linear infinite;
`;

const Loader = () => <StyledLoader />;

export default Loader;
