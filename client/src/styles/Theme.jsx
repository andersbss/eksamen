import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  breakpoints: {
    sm: '(max-width: 500px)',
    md: '(max-width: 800px)',
  },
  colors: {
    grey: '#dbdbdb',
    lightGrey: '#e8e8e8',
    blue: '#479eb9',
    black: 'black',
    white: '#ffffff',
  },
  fonts: {
    sizes: {
      button: '1.5em',
    },
    weights: {
      button: 700,
    },
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
