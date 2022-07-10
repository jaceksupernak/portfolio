import React from 'react';
import styled from 'styled-components';
import Profile from '../profile/Profile';

const HeroStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Hero:React.FC = () => (
  <HeroStyled>

    <Profile />
    <div>Jacek Supernak</div>

  </HeroStyled>

);

export default Hero;
