import React from 'react';
import SocialIconStyled from './SocialIcon.styled';

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
