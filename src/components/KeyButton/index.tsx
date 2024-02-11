import { forwardRef, ButtonHTMLAttributes } from 'react';
import { keyboardButton, keyboardButtonText, resultButton } from './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  gridArea: string;
}

const KeyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, gridArea, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        style={{ gridArea }}
        {...props}
        className={`${keyboardButton} ${label === '=' ? resultButton : ''}`}
      >
        <span className={keyboardButtonText}>{label}</span>
      </button>
    );
  }
);

KeyButton.displayName = 'KeyButton';

export default KeyButton;
