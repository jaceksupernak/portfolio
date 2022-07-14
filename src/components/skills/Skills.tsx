import React from 'react';
import { SectionHeaderStyled } from '../../App';
import { SkillsStyled, SkillStyled } from './Skills.styled';

const skillsData = [
  'HTML5',
  'S(CSS)',
  'StyledComponents',
  'ReactJS',
  'Javascript ES6',
  'TypeScript',
  'Git',
  'Agile/Scrum',
];

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
