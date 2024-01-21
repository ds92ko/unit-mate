import { ButtonHTMLAttributes } from 'react';
import { keyboardButton, keyboardButtonText, resultButton } from './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  gridArea: string;
}

function KeyButton({ label, gridArea, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      style={{ gridArea }}
      {...props}
      className={`${keyboardButton} ${label === 'result' ? resultButton : ''}`}
    >
      <span className={keyboardButtonText}>{label}</span>
    </button>
  );
}

export default KeyButton;
