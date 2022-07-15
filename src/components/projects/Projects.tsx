import React from 'react';
import styled from 'styled-components';
import { SectionHeadingStyled } from '../../theme/styledElements';
// import { projectsData } from '../../data/Data';

const ProjectsContainerStyled = styled.section`
    margin-top: 10px;
`;

const ProjectStyled = styled.div`
    border-radius: 4px;
    height: 290px;
    width: 100%;
    background: linear-gradient(91.78deg, #515586 -44.01%, rgba(255, 255, 255, 0) 140.31%);
`;

const Projects:React.FC = () => (
  <>
    <SectionHeadingStyled>projects</SectionHeadingStyled>
    <ProjectsContainerStyled>
      <ProjectStyled>
        asd

      </ProjectStyled>
    </ProjectsContainerStyled>
  </>
);

export default Projects;
