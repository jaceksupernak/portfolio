import React from 'react';
import LinkStyled from './Link.styled';

interface LinkProps {
    text: string;
    href: string;
}

const Link:React.FC<LinkProps> = ({ text, href }) => (
  <LinkStyled href={href}>
    {text}
  </LinkStyled>

);

export default Link;
