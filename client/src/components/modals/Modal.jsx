import React from 'react';
import styled from 'styled-components';

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.815);
  z-index: 2;
`;

const StyledModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: ${(props) => props.theme.colors.white};
  height: 400px;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  z-index: 3;
`;

const Modal = ({ children }) => (
  <>
    <StyledModalBackground />
    <StyledModal>{children}</StyledModal>
  </>
);

export default Modal;
