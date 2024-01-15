import React from 'react';
import ButtonStyled from './Button.styled';

interface iconProps {
  src: string;
  alt: string;
  height: string;
  width: string;
  gapToText?: string;
}

interface ButtonProps {
  type: string;
  text: string;
  href: string;
  width: string;
  height: string;
  fontSize: string;
  toLowerCase?: boolean;
  lightWeight?: boolean;
  icon?: iconProps;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  href,
  width,
  height,
  fontSize,
  toLowerCase,
  lightWeight,
  icon,
}) => (
  <ButtonStyled
    type={type}
    width={width}
    height={height}
    fontSize={fontSize}
    toLowerCase={toLowerCase}
    lightWeight={lightWeight}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    gapToText={icon && icon.gapToText ? icon.gapToText : '5px'}
  >
    {icon ? (
      <img
        src={icon.src}
        alt={icon.alt}
        height={icon.height}
        width={icon.width}
      />
    ) : null}

    {text}
  </ButtonStyled>
);

export default Button;
