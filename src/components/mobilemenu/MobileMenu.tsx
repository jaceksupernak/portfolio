import React, { useState } from 'react';
import Hamburger from '../hamburger/Hamburger';
import Menu from '../menu/Menu';

const MobileMenu:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHamburgerClickHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <Hamburger isOpen={isOpen} onHamburgerClick={onHamburgerClickHandler} />
      <Menu isOpen={isOpen} />
    </>
  );
};

export default MobileMenu;
