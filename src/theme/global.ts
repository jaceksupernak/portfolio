import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Outfit&family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        font-family: 'Outfit', sans-serif;
        color: white;
    }
    body {
        background-color: ${({ theme }) => theme.primaryDark};
        overflow-x: hidden;
    }
    #root {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyle;
