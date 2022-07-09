import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import Navbarlinks from '../navbarlinks/Navbarlinks';
import MobileMenu from '../mobilemenu/MobileMenu';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 1rem;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    font-size: 1.3rem;
    }
`;

const Navbar:React.FC = () => (
  <NavbarStyled>
    <Logo />
    <Navbarlinks />
    <MobileMenu />
  </NavbarStyled>
);

export default Navbar;
