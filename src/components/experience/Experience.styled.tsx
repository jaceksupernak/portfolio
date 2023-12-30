import styled from 'styled-components';

export const ExperienceContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ExperienceStyled = styled.article`
  display: flex;
  justify-content: flex-start;
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
  align-items: flex-start;
  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    align-items: flex-end;
  }
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
