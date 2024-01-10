import { srOnly } from '@/styles/layout.css';
import { toggleButton } from './index.css';
import { ToggleType } from './type';

function TogglButton({ direction }: ToggleType) {
  return (
    <button
      type="button"
      className={`${toggleButton} ${direction}`}
    >
      <span className={srOnly}>toggle button</span>
    </button>
  );
}

export default TogglButton;
