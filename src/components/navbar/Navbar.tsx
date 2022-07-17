import React from 'react';
import Logo from '../logo/Logo';
import NavbarLinks from '../navbarlinks/NavbarLinks';
import MobileMenu from '../mobilemenu/MobileMenu';
import NavbarStyled from './Navbar.styled';

const Navbar:React.FC = () => (
  <NavbarStyled id="start">
    <Logo />
    <NavbarLinks />
    <MobileMenu />
  </NavbarStyled>
);

export default Navbar;
