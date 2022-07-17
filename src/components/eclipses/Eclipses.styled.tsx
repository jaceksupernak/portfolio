import styled from 'styled-components';

interface EclipseProps {
  diameter: string;
  left: string;
  top: string;
  blur: string;
  opacity?: number;
}

export const EclipsesContainerStyled = styled.div`
  // disable Eclipses on the mobile view due to high drop in performance.
  display: none;

  // enable Eclipses on the tablet view an higher
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        display: block;
  }

  // blur on firefox, as opposed to Chrome, doesn't go higher that 400px
  // which makes eclipses very sharp and with a visible color circle.
  // in order to soften the appeal we move the main eclipse furter to the right.
  @supports (-moz-appearance:none) {
      & :nth-child(2) {
          background-color: ${({ theme }) => theme.secondaryLight};
          left: 75%;
      }
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
