import styled from 'styled-components';

export const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        align-items: flex-start;
    }
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    margin: 15px 0;
    gap: 10px;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
         align-self: start;
    }
`;
