import React from 'react';
import { SectionHeadingStyled, Heading3Styled, SpanStyled } from '../../theme/styledElements';
// import { projectsData } from '../../data/Data';
import Button from '../button/Button';
import {
  ProjectsContainerStyled,
  ProjectStyled,
  ProjectIconStyled,
  AboutStyled,
  PresentationStyled,
  ImgStyled,
  ButtonsContainerStyled,
  TechnologiesContainerStyled,
  TechnologyStyled,
} from './Projects.styled';

import chinguLogoSmall from '../../assets/experience_chingu_small.png';
import projectLiteTalk from '../../assets/project_litetalk.png';

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
