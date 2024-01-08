import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer } from './index.css';
import TogglButton from '../ToggleButton';

function Bookmark() {
  return (
    <aside className={[borderBox, bookmarkContainer].join(' ')}>
      <div className={bookmark}>
        <div className={scrollY}>
          <ul>
            <li />
          </ul>
        </div>
      </div>
      <TogglButton direction="horizontal" />
    </aside>
  );
}

export default Bookmark;