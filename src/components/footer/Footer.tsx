import React from 'react';
import Logo from '../logo/Logo';
import Link from '../link/Link';
import {
  FooterStyled, LinksContainerStyled, LinksHeadingStyled,
} from './Footer.styled';

const Footer:React.FC = () => (
  <FooterStyled>
    <Logo />
    <LinksContainerStyled>
      <LinksHeadingStyled>portfolio</LinksHeadingStyled>
      <Link text="About" href="https://www.google.com" />
      <Link text="Experience" href="https://www.google.com" />
      <Link text="Projects" href="https://www.google.com" />
      <Link text="Get in touch" href="https://www.google.com" />
      <Link text="CV" href="https://www.google.com" />
    </LinksContainerStyled>
    <LinksContainerStyled>
      <LinksHeadingStyled>contact</LinksHeadingStyled>
      <Link text="Email" href="https://www.google.com" />
      <Link text="Linkedin" href="https://www.google.com" />
      <Link text="Twitter" href="https://www.google.com" />
    </LinksContainerStyled>
  </FooterStyled>
);

export default Footer;
