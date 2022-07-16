import styled from 'styled-components';

export const ContactContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 34px;
    margin-top: 50px;
    padding: 30px 0px;
    gap: 30px;
    background: ${({ theme }) => `linear-gradient(98.09deg, ${theme.primaryDarkBrighter} -31.03%, ${theme.secondaryLightBrighter} 79.54%)`};

    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        padding: 50px 0px;
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 50px 0px;
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        padding: 70px 0px;
    }
`;

export const ContactTextStyled = styled.span`
    position: relative;
    font-weight: bold;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primaryDark};
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        font-size: 2rem;
    }
    
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 3rem;
    }
`;

export const WavyLineStyled = styled.img`
    position: absolute;
    bottom: -28%;
    right: 50%;
    transform: translateX(50%);
    max-width: 80vw; 

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        max-width: 90vw; 
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        max-width: 100vh;
    }
`;

export const ButtonStyleWrapper = styled.div`
    a {
        font-size: 1.2rem;
        max-width: 85vw;
        height: 50px;
    }
    a img {
        display: none;
    }

    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        a {
            font-size: 1.5rem;
            height:70px;
        }
    }

    @media (min-width: 400px) {
        a {
            height: 90px;
        }
        a img {
        display: block;
        height: 50px;
        width: 50px;
        }
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        a {
            width: 400px;
        }
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        a {
            font-size: 2rem;
            width:480px;
            height:115px;
        }
        a img {
            height: 70px;
            width: 70px;
        }
    }
    
`;
