import React from 'react';
import styled from 'styled-components';

interface LinkProps {
    text: string;
    href: string;
}

const LinkStyled = styled.a`
    text-decoration: none;
`;

const Link:React.FC<LinkProps> = ({ text, href }) => (
  <LinkStyled href={href}>
    {text}
  </LinkStyled>

);

export default Link;
