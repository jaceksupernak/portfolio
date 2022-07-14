import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import iconLocation from '../../assets/location_icon.png';

const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
        font-weight: 400;
    }

    h1 {
        font-size: 4rem;
        line-height: 80%;
        margin: 20px 0;
    }

    p {
        text-align: justify;
        max-width: 300px;
        font-family: ${({ theme }) => theme.secondaryFontFamily}
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        h1 {
            font-size: 3rem;
        }

        p {
            max-width: 465px;
            font-size: 1.2rem;
        }
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {

        align-items: flex-start;
     

        h1 {
            margin-top: 4px;
            margin-bottom: 25px;
            font-size: 6rem;
            position: relative;
            left: -5px;
            text-align: left;
        }

        p {
            max-width: 406px;
            text-align: justify;
        }
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

    <h3>Jacek Supernak</h3>
    <h1>Front-End Developer</h1>
    <p>
      I specialise in Front End Development with a focus on mobile first responsive design.
      I am skilled in working in Agile/Scrum methodology and I thrive in a team environment.
    </p>
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
