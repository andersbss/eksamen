import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  breakpoints: {
    sm: '(min-width: 500px)',
    md: '(min-width: 800px)',
  },
  colors: {
    grey: '#d1d1d1',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
