import { srOnly } from '@/styles/layout.css';
import { toggleButton, toggleButtonHorizontal, toggleButtonVertical } from './index.css';
import { ToggleType } from './type';

function TogglButton({ direction }: ToggleType) {
  return (
    <button
      type="button"
      className={`${toggleButton} ${
        direction === 'vertical' ? toggleButtonVertical : toggleButtonHorizontal
      }`}
    >
      <span className={srOnly}>toggle button</span>
    </button>
  );
}

export default TogglButton;
