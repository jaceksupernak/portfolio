import React from 'react';
import styled from 'styled-components';

const SocialIconStyled = styled.a`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(2px);
    }

    img {
        height: 36px;
        width: 36px;
    }
`;

interface SocialIconProps {
    src: string;
    href: string;
    alt: string;
}

const SocialIcon:React.FC<SocialIconProps> = ({ href, src, alt }) => (
  <SocialIconStyled href={href}>
    <img src={src} alt={alt} />
  </SocialIconStyled>

);

export default SocialIcon;
