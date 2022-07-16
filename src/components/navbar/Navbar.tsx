import React from 'react';
import Logo from '../logo/Logo';
import Navbarlinks from '../navbarlinks/Navbarlinks';
import MobileMenu from '../mobilemenu/MobileMenu';
import NavbarStyled from './Navbar.styled';

const Navbar:React.FC = () => (
  <NavbarStyled>
    <Logo />
    <Navbarlinks />
    <MobileMenu />
  </NavbarStyled>
);

export default Navbar;
