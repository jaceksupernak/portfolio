import React from 'react';
import Link from '../link/Link';
import MenuStyled from './Menu.styled';

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
