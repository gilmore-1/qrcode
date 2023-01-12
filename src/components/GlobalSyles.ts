import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${props => props.theme.fonts.primary}; 
    }
    body {
      background-color: ${props => props.theme.colors.lightgray}; 
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
`;
export default GlobalStyles;