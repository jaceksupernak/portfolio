import React from 'react';
import {
  Heading2Styled,
  Heading3Styled,
  ParagraphStyled,
  SpanLight,
  SectionHeadingStyled,
} from '../../theme/styledElements';
import {
  ExperienceStyled,
  ExperienceLogoLaptopViewStyled,
  ExperienceAboutStyled,
  CompanyContainerStyled,
  CompanyLogoStyled,
} from './Experience.styled';
import { experienceData } from '../../data/Data';

const Experience:React.FC = () => (
  <>
    <SectionHeadingStyled>experience</SectionHeadingStyled>
    {experienceData.map(({
      id, name, role, duration, description, companyLogoBig, companyLogoSmall,
    }) => (
      <ExperienceStyled key={id}>
        <ExperienceLogoLaptopViewStyled src={companyLogoBig} alt={name} width="285px" height="285px" />
        <ExperienceAboutStyled>
          <Heading3Styled>{role}</Heading3Styled>
          <CompanyContainerStyled>
            <CompanyLogoStyled src={companyLogoSmall} alt={name} width="48px" height="48px" />
            <Heading2Styled>{name}</Heading2Styled>
          </CompanyContainerStyled>
          <SpanLight>{duration}</SpanLight>
          <ParagraphStyled>{description}</ParagraphStyled>
        </ExperienceAboutStyled>
      </ExperienceStyled>
    ))}
  </>
);

export default Experience;
