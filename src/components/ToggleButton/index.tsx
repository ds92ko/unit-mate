import { srOnly } from '@/styles/layout.css';
import { toggleButton } from './index.css';
import { ToggleType } from './type';

function TogglButton({
  direction,
  isBookmarkOpen,
  setiIsBookmarkOpen,
  isResultOpen,
  setiIsResultOpen
}: ToggleType) {
  return (
    <button
      type="button"
      onClick={() =>
        setiIsResultOpen
          ? setiIsResultOpen(!isResultOpen)
          : setiIsBookmarkOpen && setiIsBookmarkOpen(!isBookmarkOpen)
      }
      className={`${toggleButton} ${direction}`}
    >
      <span className={srOnly}>toggle button</span>
    </button>
  );
}

export default TogglButton;
