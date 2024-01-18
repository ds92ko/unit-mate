import { keyboardButton, keyboardButtonText } from './index.css';

interface ButtonProps {
  label: string;
  addClassName?: string;
}

function KeyButton({ label, addClassName = '' }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${keyboardButton} ${addClassName}`}
    >
      <span className={keyboardButtonText}>{label}</span>
    </button>
  );
}

KeyButton.defaultProps = {
  addClassName: ''
} as ButtonProps;

export default KeyButton;
