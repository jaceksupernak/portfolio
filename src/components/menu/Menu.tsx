import React from 'react';
import styled from 'styled-components';
import Link from '../link/Link';

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
  position: absolute;
  font-weight: bold;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
  }
    
`;

const Menu:React.FC = () => (
  <MenuStyled>
    <Link text="experience" href="asd" />
    <Link text="projects" href="asd" />
    <Link text="get in touch" href="asd" />
    <Link text="cv" href="asd" />

  </MenuStyled>
);

export default Menu;
