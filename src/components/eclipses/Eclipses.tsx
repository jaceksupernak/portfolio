import React from 'react';
import styled from 'styled-components';

interface EclipseProps {
  diameter: string;
  left: string;
  top: string;
  blur: string;
  opacity?: number;
}

const Eclipse = styled.div<EclipseProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.secondaryLight};
  border-radius: 50%;
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  filter: blur(${(props) => props.blur});
  opacity:  ${(props) => (props.opacity ? props.opacity : 1)};
`;

const Eclipses:React.FC = () => (
  <>
    <Eclipse
      diameter="660px"
      left="-343px"
      top="-740px"
      blur="670px"
    />
    <Eclipse
      diameter="955px"
      left="319px"
      top="169px"
      blur="169px"
      opacity={0.5}
    />
    <Eclipse
      diameter="1117px"
      left="-986px"
      top="2146px"
      blur="577px"
      opacity={0.5}
    />
  </>
);

export default Eclipses;
