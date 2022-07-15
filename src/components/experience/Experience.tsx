import React from 'react';
import styled from 'styled-components';
import {
  Heading2Styled,
  Heading3Styled,
  ParagraphStyled,
  SpanLight,
  SectionHeadingStyled,

} from '../../theme/styledElements';
import chinguLogoBig from '../../assets/experience_chingu_big.png';
import chinguLogoSmall from '../../assets/experience_chingu_small.png';

const ExperienceStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        justify-content: space-between;
    
  }
`;

const ExperienceLogoLaptopViewStyled = styled.img`
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        display: block;
    
  }
`;

const ExperienceAboutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

`;

const CompanyContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompanyLogoStyled = styled.img`
  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
          display: none;
      
    }
`;

const Experience:React.FC = () => (
  <>
    <SectionHeadingStyled>experience</SectionHeadingStyled>
    <ExperienceStyled>
      <ExperienceLogoLaptopViewStyled src={chinguLogoBig} alt="Chingu" width="285px" height="285px" />
      <ExperienceAboutStyled>
        <Heading3Styled>Front-End Developer</Heading3Styled>
        <CompanyContainerStyled>
          <CompanyLogoStyled src={chinguLogoSmall} alt="Chingu" width="48px" height="48px" />
          <Heading2Styled>Chingu</Heading2Styled>
        </CompanyContainerStyled>
        <SpanLight>January 2022 - June 2022</SpanLight>
        <ParagraphStyled>
          Participated in three remote open source team projects.
          Each of the project was built in an international team of three to five developers
          over a span of seven to nine weeks and was developed using Agile Methodology.
          The technology included JavaScript ES6, HTML5, React, Redux, NodeJS, Express, MongoDB.
        </ParagraphStyled>
      </ExperienceAboutStyled>
    </ExperienceStyled>
  </>
);

export default Experience;
