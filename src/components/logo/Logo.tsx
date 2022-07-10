import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.span`
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.screen.laptop}) {
    margin-left: 5px
  }
`;

const SecondaryLight = styled.span`
  color: ${({ theme }) => theme.secondaryLight};
`;

const Logo:React.FC = () => (
  <LogoStyled>
    <SecondaryLight>super</SecondaryLight>
    nak.me
  </LogoStyled>
);

export default Logo;
