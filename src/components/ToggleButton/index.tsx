import { srOnly } from '@/styles/layout.css';
import { toggleButton } from './index.css';
import { ToggleType } from './type';

function ToggleButton({ direction, onClick }: ToggleType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${toggleButton} ${direction}`}
    >
      <span className={srOnly}>toggle button</span>
    </button>
  );
}

export default ToggleButton;
