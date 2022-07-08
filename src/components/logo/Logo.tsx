import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.span`
  font-weight: 700;
`;

const Pink = styled.span`
  color: #F176E0;
`;

const Logo:React.FC = () => (
  <LogoStyled>
    <Pink>super</Pink>
    nak.me
  </LogoStyled>
);

export default Logo;
