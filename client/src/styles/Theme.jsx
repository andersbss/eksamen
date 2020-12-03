import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  breakpoints: {
    sm: '(max-width: 500px)',
    md: '(max-width: 800px)',
  },
  colors: {
    grey: '#d1d1d1',
    blue: '#479eb9',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
