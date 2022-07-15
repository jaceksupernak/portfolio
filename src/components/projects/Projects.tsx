import React from 'react';
import styled from 'styled-components';
import { SectionHeadingStyled, Heading3Styled, SpanStyled } from '../../theme/styledElements';
// import { projectsData } from '../../data/Data';
import chinguLogoSmall from '../../assets/experience_chingu_small.png';
import projectLiteTalk from '../../assets/project_litetalk.png';
import Button from '../button/Button';

const ProjectsContainerStyled = styled.section`
    margin-top: 10px;
`;

const ProjectStyled = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    gap: 30px;
    background: linear-gradient(91.78deg, #515586 -44.01%, rgba(255, 255, 255, 0) 140.31%);
    padding: 10px;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const ImgStyled = styled.img`
    height: 139px;
    width: 270px;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        height: 163px;
        width: 316px;
    }
    
`;

const ButtonsContainerStyled = styled.div`
    display: flex;
    gap: 3px;
    @media (min-width: ${({ theme }) => theme.screen.mobile}) {
        gap: 10px;
    }
`;

const TechnologiesContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        justify-content: start; 
    }
`;

const TechnologyStyled = styled.div`
    background-color: ${({ theme }) => theme.primaryDark};
    border-radius: 13px;
    padding: 10px;
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
          <TechnologiesContainerStyled>
            <TechnologyStyled>
              JavaScript ES6
            </TechnologyStyled>
            <TechnologyStyled>
              HTML5
            </TechnologyStyled>
            <TechnologyStyled>
              ReactJS
            </TechnologyStyled>
            <TechnologyStyled>
              CSS
            </TechnologyStyled>
            <TechnologyStyled>
              NodeJS
            </TechnologyStyled>
            <TechnologyStyled>
              Redux
            </TechnologyStyled>
            <TechnologyStyled>
              Express
            </TechnologyStyled>
            <TechnologyStyled>
              MongoDB
            </TechnologyStyled>
            <TechnologyStyled>
              Agile/Scrum
            </TechnologyStyled>
            <TechnologyStyled>
              Git
            </TechnologyStyled>
            <TechnologyStyled>
              Figma
            </TechnologyStyled>
            <TechnologyStyled>
              Heroku
            </TechnologyStyled>
          </TechnologiesContainerStyled>
        </AboutStyled>
        <PresentationStyled>
          <ImgStyled src={projectLiteTalk} alt="LiteTalk" width="316" height="163" />
          <ButtonsContainerStyled>
            <Button
              type="primary"
              text="github link"
              href="mailto:jjsupernak@gmail.com"
              width="145px"
              height="40px"
              fontSize="0.9rem"
            />
            <Button
              type="secondary"
              text="live link"
              href="https://www.google.com/maps/place/London"
              width="145px"
              height="40px"
              fontSize="0.9rem"
            />
          </ButtonsContainerStyled>
        </PresentationStyled>

      </ProjectStyled>
    </ProjectsContainerStyled>
  </>
);

export default Projects;
