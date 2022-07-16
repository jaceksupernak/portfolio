import React from 'react';
import {
  Heading2Styled,
  Heading4Styled,
  ParagraphStyled,
  SpanStyled,
  SectionHeadingStyled,
} from '../../theme/styledElements';
import {
  ExperienceContainerStyled,
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
    <ExperienceContainerStyled>
      {experienceData.map(({
        id, name, role, duration, description, companyLogoBig, companyLogoSmall,
      }) => (
        <ExperienceStyled key={id}>
          <ExperienceLogoLaptopViewStyled src={companyLogoBig} alt={name} width="285px" height="285px" />
          <ExperienceAboutStyled>
            <Heading4Styled>{role}</Heading4Styled>
            <CompanyContainerStyled>
              <CompanyLogoStyled src={companyLogoSmall} alt={name} width="48px" height="48px" />
              <Heading2Styled>{name}</Heading2Styled>
            </CompanyContainerStyled>
            <SpanStyled fontWeight="100" margin="5px 0">{duration}</SpanStyled>
            <ParagraphStyled>{description}</ParagraphStyled>
          </ExperienceAboutStyled>
        </ExperienceStyled>
      ))}
    </ExperienceContainerStyled>
  </>
);

export default Experience;
