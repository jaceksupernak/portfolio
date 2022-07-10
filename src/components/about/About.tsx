import React from 'react';
import styled from 'styled-components';

const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
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
        text-align: left;
        padding: 5px;
        max-width: 310px;
        font-family: Roboto;
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        h1 {
            font-size: 3rem;
        }

        p {
            max-width: 475px;
            font-size: 1.2rem;
        }
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {

        align-items: flex-start;
        text-align: left;

        h2 {
            margin-left: 5px;
        }

        h1 {
            margin-top: 4px;
            font-size: 6rem;
        }

        p {
           
            max-width: 475px;
        }
    }
`;

const About:React.FC = () => (
  <AboutStyled>

    <h2>Jacek Supernak</h2>
    <h1>Front-End Developer</h1>
    <p>
      I specialise in Front End Development with a focus on mobile first responsive design.
      I am skilled in working in Agile/Scrum methodology and I thrive in a team environment.
    </p>
    <div>
      <div>button1</div>
      <div>button2</div>
    </div>

  </AboutStyled>

);

export default About;
