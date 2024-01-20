import { useState } from 'react';
import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer, bookmarkGuide, bookmarkList } from './index.css';
import History from '@/components/History';
import TogglButton from '@/components/ToggleButton';
import { useHistoryStore } from '@/stores/historyStore';

function Bookmark() {
  const [isBookmarkOpen, setiIsBookmarkOpen] = useState<boolean>(true);
  const { activeTab, bookmarks, toggleBookmark } = useHistoryStore();
  const tabBookmarks = bookmarks[activeTab] || [];

  return (
    <aside className={`${borderBox} ${bookmarkContainer} ${isBookmarkOpen ? 'isOpen' : ''}`}>
      <div className={`${bookmark} ${scrollY}`}>
        <div>
          {tabBookmarks.length > 0 ? (
            <ul>
              {tabBookmarks.map(({ id, input, result, isBookmark }) => (
                <li
                  className={bookmarkList}
                  key={id}
                >
                  <History
                    id={id}
                    input={input}
                    result={result}
                    isBookmark={isBookmark}
                    onToggleBookmark={() => toggleBookmark({ id, input, result, isBookmark })}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <span className={bookmarkGuide}>No Bookmark</span>
          )}
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
