import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle : any = createGlobalStyle`
  ${reset};
  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  html { 
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    @media ${(props: any) => props.theme.device.desktopL} {
      font-size: 14px;
    }
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default GlobalStyle;
