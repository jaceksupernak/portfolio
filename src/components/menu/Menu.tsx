import React from 'react';
import styled from 'styled-components';
import Link from '../link/Link';

interface MenuStyledProps {
    isOpen: boolean;
}

const MenuStyled = styled.div<MenuStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: center;
  text-transform: uppercase;
  position: fixed;
  font-weight: bold;
  top: 0;
  right: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  transform: translateX(100%);
  
  @media (min-width: ${({ theme }) => theme.screen.mobile}) {
    max-width: 320px;;
  }

  a {
    font-size: 2rem;
    padding: 1.5rem 0;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
  }
    
`;

interface MenuProps {
    isOpen: boolean;
}

const Menu:React.FC<MenuProps> = ({ isOpen }) => (
  <MenuStyled isOpen={isOpen}>
    <Link text="experience" href="asd" />
    <Link text="projects" href="asd" />
    <Link text="get in touch" href="asd" />
    <Link text="cv" href="asd" />
  </MenuStyled>
);

export default Menu;
