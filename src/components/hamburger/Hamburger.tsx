import React from 'react';
import styled from 'styled-components';

interface HamburgerStyledProps {
  isOpen: boolean;
}

export const HamburgerStyled = styled.button<HamburgerStyledProps>`
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
    height: 0.1rem;
    // 0.2 -> 0.1
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }

`;

interface HamburgerProps {
  isOpen: boolean;
  onHamburgerClick: () => void;
}

const Hamburger:React.FC<HamburgerProps> = ({ isOpen, onHamburgerClick }) => (
  <HamburgerStyled isOpen={isOpen} onClick={onHamburgerClick}>
    <div />
    <div />
    <div />
  </HamburgerStyled>
);

export default Hamburger;
