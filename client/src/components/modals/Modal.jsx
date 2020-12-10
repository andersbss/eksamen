import React from 'react';
import { func, node } from 'prop-types';
import styled from 'styled-components';

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const StyledModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 50px;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.white};
  z-index: 3;
`;

const Modal = ({ children, handleToggle }) => (
  <>
    <StyledModalBackground onClick={handleToggle} />
    <StyledModal>{children}</StyledModal>
  </>
);

Modal.propTypes = {
  children: node,
  handleToggle: func,
};

export default Modal;
