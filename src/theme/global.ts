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
        // create two background modes to improve mobile performance: 
        // 1. the mobile view mode uses the gradient and has the colorful eclipses disabled
        background: ${({ theme }) => `linear-gradient(80deg, ${theme.primaryDark} 40%, ${theme.secondaryLight} 350%)`};

        // 2. the tablet view and higher uses primaryDark color and has the colorful eclipses enabled
        @media (min-width: ${({ theme }) => theme.screen.tablet}) {
            background: ${({ theme }) => theme.primaryDark};
        }
    }
    #root {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // create a gap between site wrapper and the bottom gradient line
        gap: 20px;
        // disable scrolling for the overflowing eclipses 
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
