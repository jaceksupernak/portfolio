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
    height: ${({ isOpen }) => (isOpen ? '0.25rem' : '0.1rem')};
    background: ${({ theme, isOpen }) => (isOpen ? theme.primaryDark : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  

  :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'translateY(5px) rotate(-45deg)' : 'translateY(0) rotate(0)')};
    }
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
