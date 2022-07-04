import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    text: string,
    buttonClass?:string
}

function Button({ text, buttonClass } : ButtonProps) {
  return (
    <button type="submit" className={buttonClass || styles.btnPrimary}>{text}</button>
  );
}

export default Button;
