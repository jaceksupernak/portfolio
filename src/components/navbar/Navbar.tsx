import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import Navbarlinks from '../navbarlinks/Navbarlinks';

const NavbarStyled = styled.nav`
  margin-top: 25px;
  font-size: 1.3rem;
  font-weight: 100;
`;

const Navbar:React.FC = () => (
  <NavbarStyled>
    <Logo />
    <Navbarlinks />
  </NavbarStyled>
);

export default Navbar;
