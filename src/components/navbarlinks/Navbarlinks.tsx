import React from 'react';
import styled from 'styled-components';
import Link from '../link/Link';

const NavbarlinksStyled = styled.div`
  display: none;
  
  gap: 20px;
  

  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: flex;
    }

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    gap: 42px;
  }
`;

const Navbarlinks:React.FC = () => (
  <NavbarlinksStyled>
    <Link text="experience" href="https://www.google.com" />
    <Link text="projects" href="https://www.google.com" />
    <Link text="get in touch" href="https://www.google.com" />
    <Link text="cv" href="https://www.google.com" />
  </NavbarlinksStyled>
);

export default Navbarlinks;
