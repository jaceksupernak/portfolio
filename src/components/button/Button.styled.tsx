import styled from 'styled-components';

interface ButtonStyledProps {
    type: string,
    width: string,
    height: string,
    fontSize: string,
    toLowerCase?: boolean;
    lightWeight?: boolean;
    gapToText?: string;
}

// ------------------------------------------------------------
// There are 3 types of button: primary, secondary, tertiary
//
// Primary button, used in <About><Projects>
// -font color of the primaryDark
// -gradient backround of the secondaryLight color
//
// Secondary button, used in <About><Projects>
// -font color of the primaryLight
// -transparent background
// -inline 1px border of the primaryLightTransparent color
//
// Tertiary button, used in <Contact>
// -font color of the primaryLight
// -background color fill of the primaryDark color
//
//
// Apart from the types of buttons there are available options
// to tweak the render of the button or add additional items
// like for example an icon next to the text:
// -width:string set the button's width
// -height:string set the buttons's height
// -icon?:{} set the buttons icon and its attributes:
//      {src, alt, width, height, gapToText(optional, default 5px)}
// -toLowerCase?:boolean - set the default upperCase to lowerCase
// -lightWeight?:boolean - set the default bold to regular

const ButtonStyled = styled.a<ButtonStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ gapToText }) => (gapToText)};
    font-weight: ${({ lightWeight }) => (lightWeight ? 'regular' : 'bold')};
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
