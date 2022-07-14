import React from 'react';
import styled from 'styled-components';

interface LinkProps {
    text: string;
    href: string;
}

const LinkStyled = styled.a`
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.secondaryLightBrighter};
    }
`;

const Link:React.FC<LinkProps> = ({ text, href }) => (
  <LinkStyled href={href}>
    {text}
  </LinkStyled>

);

export default Link;
