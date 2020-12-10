import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const StyledError = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  width: 220px;
  height: 100px;
  text-align: center;

  background-color: ${(props) => props.theme.colors.blue};

  & > p {
    color: white;
    font-size: 1.3rem;
  }
`;

const Error = ({ error }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
    <>
      {visible && (
        <StyledError>
          <p>{`En feil oppstod (${
            Array.isArray(error) ? error[0] : error
          })`}</p>
        </StyledError>
      )}
    </>
  );
};

export default Error;
