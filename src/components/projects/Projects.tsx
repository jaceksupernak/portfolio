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

const projectsData = [{
  id: 1,
  name: 'Litetalk',
  description: 'a lightweight messanger app',
  liveLink: 'https://www.litetalk.herokuapp.com/',
  gitHubLink: 'https://github.com/chingu-voyages/v39-bears-team-11',
  technologies: [
    'HTML5',
    'CSS',
    'JavaScript ES6',
    'ReactJS', 'NodeJS',
    'Redux',
    'Express',
    'MongoDB',
    'Agile/Scrum',
    'Git',
    'Figma',
    'Heroku',
  ],
  laptopImage: projectLiteTalk,
  cornerLogo: chinguLogoSmall,
}];

const Projects:React.FC = () => (
  <>
    <SectionHeadingStyled>projects</SectionHeadingStyled>
    <ProjectsContainerStyled>
      {projectsData.map(({
        id, name, description, liveLink, gitHubLink, technologies, laptopImage, cornerLogo,
      }) => (
        <ProjectStyled key={id}>
          <ProjectIconStyled src={cornerLogo} alt="made in team" width="48px" height="48px" />
          <AboutStyled>
            <Heading3Styled>{name}</Heading3Styled>
            <SpanStyled fontWeight="400" fontSize="1.2rem">{description}</SpanStyled>
            <TechnologiesContainerStyled>
              {technologies.map((tech) => (
                <TechnologyStyled>{tech}</TechnologyStyled>
              ))}
            </TechnologiesContainerStyled>
          </AboutStyled>
          <PresentationStyled>
            <ImgStyled src={laptopImage} alt={name} width="316" height="163" />
            <ButtonsContainerStyled>
              <Button
                type="primary"
                text="github link"
                href={gitHubLink}
                width="145px"
                height="40px"
                fontSize="0.9rem"
              />
              <Button
                type="secondary"
                text="live link"
                href={liveLink}
                width="145px"
                height="40px"
                fontSize="0.9rem"
              />
            </ButtonsContainerStyled>
          </PresentationStyled>
        </ProjectStyled>
      ))}
    </ProjectsContainerStyled>
  </>
);

export default Projects;
