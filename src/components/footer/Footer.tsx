import React from 'react';
import Logo from '../logo/Logo';
import Link from '../link/Link';
import {
  FooterStyled, LinksContainerStyled, LinksHeadingStyled,
} from './Footer.styled';
import CV from '../../assets/JacekSupernakCV.pdf';

const Footer:React.FC = () => (
  <FooterStyled>
    <Logo />
    <LinksContainerStyled>
      <LinksHeadingStyled>portfolio</LinksHeadingStyled>
      <Link text="About" href="#start" />
      <Link text="Experience" href="#experience" />
      <Link text="Projects" href="#projects" />
      <Link text="Get in touch" href="#contact" />
      <Link text="CV" href={CV} />
    </LinksContainerStyled>
    <LinksContainerStyled>
      <LinksHeadingStyled>contact</LinksHeadingStyled>
      <Link text="Email" href="mailto:jjsupernak@gmail.com" />
      <Link text="Linkedin" href="https://www.linkedin.com/in/jacek-supernak" />
      <Link text="Twitter" href="https://twitter.com/jacek_supernak" />
    </LinksContainerStyled>
  </FooterStyled>
);

export default Footer;
