import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import iconLocation from '../../assets/location_icon.png';
import { ParagraphStyled, Heading1Styled, Heading3Styled } from '../../theme/styledElements';

const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        align-items: flex-start;
    }
`;

const ButtonContainerStyled = styled.div`
    display: flex;
    margin: 15px 0;
    gap: 10px;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
         align-self: start;
    }
`;

const About:React.FC = () => (
  <AboutStyled>
    <Heading3Styled>Jacek Supernak</Heading3Styled>
    <Heading1Styled>Front-End Developer</Heading1Styled>
    <ParagraphStyled>
      I specialise in Front End Development with a focus on mobile first responsive design.
      I am skilled in working in Agile/Scrum methodology and I thrive in a team environment.
    </ParagraphStyled>
    <ButtonContainerStyled>
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
    </ButtonContainerStyled>
  </AboutStyled>
);

export default About;
