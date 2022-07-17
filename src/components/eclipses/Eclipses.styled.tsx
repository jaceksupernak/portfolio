import styled from 'styled-components';

interface EclipseProps {
  diameter: string;
  left: string;
  top: string;
  blur: string;
  opacity?: number;
}

export const EclipsesContainerStyled = styled.div`
  display: none;

  @supports (-moz-appearance:none) {
    & :nth-child(2) {
      background-color: ${({ theme }) => theme.secondaryLight};
      left: 75%;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        display: block;
    }
`;

export const EclipseStyled = styled.div<EclipseProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.secondaryLight};
  border-radius: 50%;
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  filter: blur(${(props) => props.blur});
  opacity:  ${(props) => (props.opacity ? props.opacity : 1)};
  z-index: -1;
`;
