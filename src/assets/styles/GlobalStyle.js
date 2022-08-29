import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html { 
    width: 100vw;
    height: 100vh;
    font-size: 100%;
  }
`;

export default GlobalStyle;