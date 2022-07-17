import React from 'react';
import LinkStyled from './Link.styled';

interface LinkProps {
    text: string;
    href: string;
    onClick?: () => void;
}

const Link:React.FC<LinkProps> = ({ text, href, onClick }) => (
  <LinkStyled href={href} onClick={onClick}>
    {text}
  </LinkStyled>

);

export default Link;
