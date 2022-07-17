import React from 'react';
import { EclipseStyled, EclipsesContainerStyled } from './Eclipses.styled';

const Eclipses:React.FC = () => (
  <EclipsesContainerStyled>
    <EclipseStyled
      diameter="660px"
      left="-270px"
      top="-680px"
      blur="670px"
    />
    <EclipseStyled
      diameter="955px"
      left="40%"
      top="169px"
      blur="477px"
      opacity={0.5}
    />
    <EclipseStyled
      diameter="1117px"
      left="-986px"
      top="2146px"
      blur="577px"
      opacity={0.5}
    />
  </EclipsesContainerStyled>
);

export default Eclipses;
