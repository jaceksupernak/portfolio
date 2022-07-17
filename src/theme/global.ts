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
    html {
        scroll-behavior: smooth;
    }
    body {
        background: ${({ theme }) => `linear-gradient(80deg, ${theme.primaryDark} 40%, ${theme.secondaryLight} 350%)`};
        @media (min-width: ${({ theme }) => theme.screen.tablet}) {
            background: ${({ theme }) => theme.primaryDark};
        }
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
