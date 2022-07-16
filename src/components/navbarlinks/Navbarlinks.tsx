import React from 'react';
import Link from '../link/Link';
import NavbarLinksStyled from './NavbarLinks.styled';

const NavbarLinks:React.FC = () => (
  <NavbarLinksStyled>
    <Link text="experience" href="https://www.google.com" />
    <Link text="projects" href="https://www.google.com" />
    <Link text="get in touch" href="https://www.google.com" />
    <Link text="cv" href="https://www.google.com" />
  </NavbarLinksStyled>
);

export default NavbarLinks;
