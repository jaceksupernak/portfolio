import React from 'react';
import { SectionHeadingStyled, Heading3Styled, SpanStyled } from '../../theme/styledElements';
import { projectsData } from '../../data/Data';
import Button from '../button/Button';
import {
  ProjectsContainerStyled,
  ProjectStyled,
  CornerLogoStyled,
  AboutStyled,
  PresentationStyled,
  LaptopImageStyled,
  ButtonsContainerStyled,
  TechnologiesContainerStyled,
  TechnologyStyled,
} from './Projects.styled';

const Projects:React.FC = () => (
  <>
    <SectionHeadingStyled id="projects">projects</SectionHeadingStyled>
    <ProjectsContainerStyled>
      {projectsData.map(({
        id, name, description, liveLink, gitHubLink, technologies, laptopImage, cornerLogo,
      }) => (
        <ProjectStyled key={id}>
          {cornerLogo ? (<CornerLogoStyled src={cornerLogo} alt="made in team" width="48px" height="48px" />) : null }
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
            <LaptopImageStyled src={laptopImage} alt={name} width="316" height="163" />
            <ButtonsContainerStyled>
              <Button
                type="primary"
                text="github"
                href={gitHubLink}
                width="90px"
                height="40px"
                fontSize="0.9rem"
              />
              {liveLink ? (
                <Button
                  type="secondary"
                  text="live"
                  href={liveLink}
                  width="90px"
                  height="40px"
                  fontSize="0.9rem"
                />
              ) : null}
            </ButtonsContainerStyled>
          </PresentationStyled>
        </ProjectStyled>
      ))}
    </ProjectsContainerStyled>
  </>
);

export default Projects;
