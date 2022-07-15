import React from 'react';
import styled from 'styled-components';
import { SectionHeaderStyled, ParagraphStyled } from '../../App';
import chinguLogoBig from '../../assets/experience_chingu_big.png';

const ExperienceStyled = styled.div`
    display: flex;
    justify-content: end;
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

const Experience:React.FC = () => (
  <>
    <SectionHeaderStyled>experience</SectionHeaderStyled>
    <ExperienceStyled>
      <ExperienceLogoLaptopViewStyled src={chinguLogoBig} alt="Chingu" />
      <ExperienceAboutStyled>
        <span>Front-End Developer</span>
        <span>Chingu</span>
        <span>January 2022 - June 2022</span>
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
