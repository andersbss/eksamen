import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 11px;
    font-family:'Roboto', sans-serif;
    background-color: #fafafa;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 4rem;
      font-weight: 900;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5em;
      font-weight: 800;
    }
    p {
      font-size: 1.6rem;
    }
    a {
      font-size: 1.3rem;
    }
  }
  ${normalize}
`;
