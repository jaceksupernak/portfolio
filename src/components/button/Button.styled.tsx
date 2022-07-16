import styled from 'styled-components';

interface ButtonStyledProps {
    type: string,
    width: string,
    height: string,
    fontSize: string,
    toLowerCase?: boolean;
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
    border-radius: 13px;
  
    transition: filter 0.3s linear;
    &:hover {
      filter: brightness(80%);
    }
  `;

export default ButtonStyled;
