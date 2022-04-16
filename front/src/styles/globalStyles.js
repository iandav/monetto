import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Poppins";
        src: url(../fonts/Poppins-Regular.ttf);
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #2B2B2B;
        color: white;
        font-family: Poppins;
    }

`

export default GlobalStyle