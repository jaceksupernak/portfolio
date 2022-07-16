import React from 'react';
import Button from '../button/Button';
import iconLocation from '../../assets/location_icon.png';
import { ParagraphStyled, Heading1Styled, Heading4Styled } from '../../theme/styledElements';
import { AboutStyled, ButtonsContainerStyled } from './About.styled';

const About:React.FC = () => (
  <AboutStyled>
    <Heading4Styled>Jacek Supernak</Heading4Styled>
    <Heading1Styled>Front-End Developer</Heading1Styled>
    <ParagraphStyled>
      I specialise in Front End Development with a focus on mobile first responsive design.
      I am skilled in working in Agile/Scrum methodology and I thrive in a team environment.
    </ParagraphStyled>
    <ButtonsContainerStyled>
      <Button
        type="primary"
        text="open for hire"
        href="mailto:jjsupernak@gmail.com"
        width="145px"
        height="40px"
        fontSize="0.9rem"
      />
      <Button
        type="secondary"
        text="london"
        href="https://www.google.com/maps/place/London"
        width="145px"
        height="40px"
        fontSize="0.9rem"
        icon={{
          src: iconLocation,
          alt: 'location',
          height: '18px',
          width: '11px',
        }}
      />
    </ButtonsContainerStyled>
  </AboutStyled>
);

export default About;
