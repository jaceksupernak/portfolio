import React from 'react';
import Profile from '../profile/Profile';
import About from '../about/About';
import HeroStyled from './Hero.styled';

const Hero:React.FC = () => (
  <HeroStyled>

    <Profile />
    <About />

  </HeroStyled>

);

export default Hero;
