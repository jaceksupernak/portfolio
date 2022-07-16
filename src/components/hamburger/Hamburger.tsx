import React from 'react';
import HamburgerStyled from './Hamburger.styled';

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
