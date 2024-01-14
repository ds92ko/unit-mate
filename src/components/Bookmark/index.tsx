import { useState } from 'react';
import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer } from './index.css';
import TogglButton from '@/components/ToggleButton';

function Bookmark() {
  const [isBookmarkOpen, setiIsBookmarkOpen] = useState<boolean>(true);

  return (
    <aside className={`${borderBox} ${bookmarkContainer} ${isBookmarkOpen ? 'isOpen' : ''}`}>
      <div className={bookmark}>
        <div className={scrollY}>
          <ul>
            <li />
          </ul>
        </div>
      </div>
      <TogglButton
        direction="horizontal"
        isBookmarkOpen={isBookmarkOpen}
        setiIsBookmarkOpen={setiIsBookmarkOpen}
      />
    </aside>
  );
}

export default Bookmark;
