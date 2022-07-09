import React from 'react';
import styled from 'styled-components';

export const HamburgerStyled = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.2rem;
    // 0.2 -> 0.1
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

`;

const Hamburger = () => (
  <HamburgerStyled>
    <div />
    <div />
    <div />
  </HamburgerStyled>
);

export default Hamburger;
