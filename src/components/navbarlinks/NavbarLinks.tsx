import React from 'react';
import Link from '../link/Link';
import NavbarLinksStyled from './NavbarLinks.styled';
import CV from '../../assets/JacekSupernakCV.pdf';

const NavbarLinks:React.FC = () => (
  <NavbarLinksStyled>
    <Link text="experience" href="#experience" />
    <Link text="projects" href="#projects" />
    <Link text="get in touch" href="#contact" />
    <Link text="cv" href={CV} />
  </NavbarLinksStyled>
);

export default NavbarLinks;
