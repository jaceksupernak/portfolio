import React from 'react';
import ButtonStyled from './Button.styled';

interface iconProps {
  src: string,
  alt: string,
  height: string,
  width: string;
}

interface ButtonProps {
  type: string,
  text: string,
  href: string,
  width: string,
  height: string,
  fontSize: string,
  toLowerCase?: boolean;
  icon?: iconProps;
}

const Button:React.FC<ButtonProps> = ({
  type, text, href, width, height, fontSize, toLowerCase, icon,
}) => (
  <ButtonStyled
    type={type}
    width={width}
    height={height}
    fontSize={fontSize}
    toLowerCase={toLowerCase}
    href={href}
  >
    {icon
      ? (
        <img
          src={icon.src}
          alt={icon.alt}
          height={icon.height}
          width={icon.width}
        />
      )
      : null}

    {text}
  </ButtonStyled>
);

export default Button;
