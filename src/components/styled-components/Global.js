import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html {
    height: 100%;
  }
  
  body {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    background-color: #111111;
    height: 100%;
  }
  
  #root {
    flex-direction: column;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }


`;

export default Global;
