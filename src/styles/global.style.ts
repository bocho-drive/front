import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans KR", sans-serif;
    }

    button, a {
        font-family: "Noto Sans KR", sans-serif;
    }



    a {
        text-decoration: none;
        color: inherit;
    }

    &::-webkit-scrollbar {
        display: none; // Webkit 브라우저용
    }

    scrollbar-width: none; // Firefox용
    -ms-overflow-style: none;  // IE, Edge용



`;

export default GlobalStyle;
