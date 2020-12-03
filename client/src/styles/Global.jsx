import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 11px;
    font-family:'Roboto', sans-serif;;
  }
  body {
    width: 100%;
    h1 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  ${normalize}
`;
