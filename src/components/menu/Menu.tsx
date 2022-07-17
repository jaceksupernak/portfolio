import React from 'react';
import Link from '../link/Link';
import MenuStyled from './Menu.styled';
import CV from '../../assets/JacekSupernakCV.pdf';

interface MenuProps {
  isOpen: boolean;
  onHamburgerClick: () => void;
}

const Menu:React.FC<MenuProps> = ({ isOpen, onHamburgerClick }) => (
  <MenuStyled isOpen={isOpen}>
    <Link text="experience" href="#experience" onClick={onHamburgerClick} />
    <Link text="projects" href="#projects" onClick={onHamburgerClick} />
    <Link text="get in touch" href="#contact" onClick={onHamburgerClick} />
    <Link text="cv" href={CV} />
  </MenuStyled>
);

export default Menu;
