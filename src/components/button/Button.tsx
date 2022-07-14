import React from 'react';
import styled from 'styled-components';

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

interface ButtonStyledProps {
  type: string,
  width: string,
  height: string,
  fontSize: string,
  toLowerCase?: boolean;
  icon?: iconProps;
}

const ButtonStyled = styled.a<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize)};
  color: ${({ type, theme }) => (type === 'primary' ? theme.primaryDark : theme.primaryLight)};
  box-shadow:${({ type, theme }) => (type === 'secondary' ? `inset 0px 0px 0px 1px ${theme.primaryLightTransparent}` : 'none')}; 
  background:  ${({ type, theme }) => {
    switch (type) {
      case 'primary':
        return `linear-gradient(96.62deg, ${theme.primaryLight} -41.24%, ${theme.secondaryLight} 255.27%)`;
      case 'secondary':
        return 'none';
      case 'tertiary':
        return theme.primaryDark;
      default:
        return null;
    }
  }};
  
  height: ${({ height }) => (height)};
  width: ${({ width }) => (width)};
  text-decoration: none;
  text-transform:  ${({ toLowerCase }) => (toLowerCase ? 'none' : 'uppercase')};
  border-radius: 13px
`;

const Button:React.FC<ButtonProps> = ({
  type, text, href, width, height, fontSize, toLowerCase, icon,
}) => (
  <ButtonStyled
    type={type}
    width={width}
    height={height}
    fontSize={fontSize}
    toLowerCase={toLowerCase}
    icon={icon}
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
