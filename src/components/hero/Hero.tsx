import React from 'react';
import styled from 'styled-components';

const HeroStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Hero:React.FC = () => (
  <HeroStyled>

    <div>Profile picture</div>
    <div>Jacek Supernak</div>

  </HeroStyled>

);

export default Hero;