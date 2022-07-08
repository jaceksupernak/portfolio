import React from 'react';
import styled from 'styled-components';

interface EclipseProps {
  width: string;
  height: string;
  left: string;
  top: string;
  blur: string;
  opacity?: number;
}

const Eclipse = styled.div<EclipseProps>`
  position: absolute;
  background-color: #F176E0;
  border-radius: 50%;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  left: ${(p) => p.left};
  top: ${(p) => p.top};
  filter: blur(${(p) => p.blur});
  opacity:  ${(p) => (p.opacity ? p.opacity : 1)};
`;

const Eclipses:React.FC = () => (
  <>
    <Eclipse
      width="660px"
      height="662px"
      left="-343px"
      top="-740px"
      blur="670px"
    />
    <Eclipse
      width="955px"
      height="955px"
      left="319px"
      top="169px"
      blur="169px"
      opacity={0.5}
    />
  </>
);

export default Eclipses;
