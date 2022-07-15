import React from 'react';
import styled from 'styled-components';
import { SectionHeadingStyled, Heading3Styled, SpanStyled } from '../../theme/styledElements';
// import { projectsData } from '../../data/Data';
import chinguLogoSmall from '../../assets/experience_chingu_small.png';

const ProjectsContainerStyled = styled.section`
    margin-top: 10px;
`;

const ProjectStyled = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    border-radius: 4px;
    height: 290px;
    width: 100%;
    background: linear-gradient(91.78deg, #515586 -44.01%, rgba(255, 255, 255, 0) 140.31%);
    padding: 10px 20px;
`;

const ProjectIconStyled = styled.img`
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

const AboutStyled = styled.div`
    
`;

const PresentationStyled = styled.div`
    
`;

const Projects:React.FC = () => (
  <>
    <SectionHeadingStyled>projects</SectionHeadingStyled>
    <ProjectsContainerStyled>
      <ProjectStyled>
        <ProjectIconStyled src={chinguLogoSmall} alt="chingu" width="48px" height="48px" />
        <AboutStyled>
          <Heading3Styled>Litetalk</Heading3Styled>
          <SpanStyled fontWeight="400" fontSize="1.2rem">a lightweight messanger app</SpanStyled>
        </AboutStyled>
        <PresentationStyled>
          asd
        </PresentationStyled>

      </ProjectStyled>
    </ProjectsContainerStyled>
  </>
);

export default Projects;
