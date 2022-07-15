import styled from 'styled-components';

export const ProjectsContainerStyled = styled.section`
    margin-top: 10px;
`;

export const ProjectStyled = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    gap: 30px;
    background: linear-gradient(91.78deg, #515586 -44.01%, rgba(255, 255, 255, 0) 140.31%);
    padding: 10px;
    padding-bottom: 20px;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 10px 20px 20px 20px;
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        justify-content: space-between;
        flex-direction: row;
        height: 290px;
        padding-bottom: 10px;
    }

`;

export const ProjectIconStyled = styled.img`
    position: absolute;
    top: -24px;
    right: 50%;
    transform: translateX(50%);
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        top: -24px;
        right: -24px;
        transform: none;
    }
`;

export const AboutStyled = styled.div`
    
`;

export const PresentationStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const ImgStyled = styled.img`
    height: 139px;
    width: 270px;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        height: 163px;
        width: 316px;
    }
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    gap: 3px;
    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        gap: 10px;
    }
`;

export const TechnologiesContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        justify-content: start; 
    }
`;

export const TechnologyStyled = styled.div`
    background-color: ${({ theme }) => theme.primaryDark};
    border-radius: 13px;
    padding: 10px;
`;
