import React from 'react';
import { keyboardButton, keyboardButtonText } from './index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  gridArea: string;
}

function KeyButton({ label, gridArea, ...props }: ButtonProps) {
  const buttonStyle = {
    gridArea
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      className={`${keyboardButton} ${props.className}`}
    >
      <span className={keyboardButtonText}>{label}</span>
    </button>
  );
}

export default KeyButton;
