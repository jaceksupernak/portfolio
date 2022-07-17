import React from 'react';
import HamburgerStyled from './Hamburger.styled';

interface HamburgerProps {
  isOpen: boolean;
  onHamburgerClick: () => void;
}

const Hamburger:React.FC<HamburgerProps> = ({ isOpen, onHamburgerClick }) => (
  <HamburgerStyled isOpen={isOpen} onClick={onHamburgerClick} aria-label="toggle menu button">
    <div />
    <div />
    <div />
  </HamburgerStyled>
);

export default Hamburger;
