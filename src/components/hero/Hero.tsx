import React from 'react';
import styled from 'styled-components';
import Profile from '../profile/Profile';
import About from '../about/About';

const HeroStyled = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
      margin-top: 40px;
    }

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 80px;

      & >:nth-child(1){
        order: 2;
      }
  }
`;

const Hero:React.FC = () => (
  <HeroStyled>

    <Profile />
    <About />

  </HeroStyled>

);

export default Hero;
