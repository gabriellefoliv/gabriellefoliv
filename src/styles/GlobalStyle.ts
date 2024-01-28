import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px 0px;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }


    body {
        font-family: 'Work Sans', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        margin: 0 0px;
        overflow-x: hidden;
    }
  
`;