import React from 'react';
import { SectionHeaderStyled } from '../../App';
import { SkillsStyled, SkillStyled } from './Skills.styled';
import { skillsData } from '../../data/Data';

const Skills:React.FC = () => (
  <>
    <SectionHeaderStyled>skills</SectionHeaderStyled>
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
