import React from 'react';
import { SectionHeadingStyled } from '../../theme/styledElements';
import { SkillsStyled, SkillStyled } from './Skills.styled';
import { skillsData } from '../../data/Data';

const Skills:React.FC = () => (
  <>
    <SectionHeadingStyled>skills</SectionHeadingStyled>
    <SkillsStyled>
      {skillsData.map((skill) => (
        <SkillStyled key={skill}>
          {skill}
        </SkillStyled>
      ))}
    </SkillsStyled>
  </>
);

export default Skills;
