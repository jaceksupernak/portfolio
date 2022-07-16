import React from 'react';
import { SectionHeadingStyled, Heading3Styled, SpanStyled } from '../../theme/styledElements';
import { projectsData } from '../../data/Data';
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
            <SpanStyled fontSize="1.2rem">{description}</SpanStyled>
            <TechnologiesContainerStyled>
              {technologies.map((tech) => (
                <TechnologyStyled key={tech}>{tech}</TechnologyStyled>
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
