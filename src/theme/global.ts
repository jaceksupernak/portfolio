import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        font-family: 'Outfit', sans-serif;
        color: ${({ theme }) => theme.primaryLight};
    }
    body {
        background-color: ${({ theme }) => theme.primaryDark};
        overflow-x: hidden;
    }
    #root {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
