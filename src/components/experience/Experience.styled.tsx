import styled from 'styled-components';

export const ExperienceStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        justify-content: space-between;
    
  }
`;

export const ExperienceLogoLaptopViewStyled = styled.img`
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        display: block;
    
  }
`;

export const ExperienceAboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

`;

export const CompanyContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CompanyLogoStyled = styled.img`
  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
          display: none;
      
    }
`;
