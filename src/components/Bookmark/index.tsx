import { useState, useEffect } from 'react';
import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer, bookmarkGuide, bookmarkList } from './index.css';
import History from '@/components/History';
import TogglButton from '@/components/ToggleButton';
import { useHistoryStore } from '@/stores/historyStore';

function Bookmark() {
  const [isBookmarkOpen, setiIsBookmarkOpen] = useState<boolean>(true);
  const { bookmarkedData } = useHistoryStore();

  useEffect(() => {
    const savedBookmarkedData = localStorage.getItem('bookmarkedData');
    if (savedBookmarkedData) {
      useHistoryStore.setState({ bookmarkedData: JSON.parse(savedBookmarkedData) });
    }
  }, []);
  return (
    <aside className={`${borderBox} ${bookmarkContainer} ${isBookmarkOpen ? 'isOpen' : ''}`}>
      <div className={`${bookmark} ${scrollY}`}>
        <div>
          {bookmarkedData.length > 0 ? (
            <ul>
              {bookmarkedData.map(({ id, input, result, isBookmark }) => (
                <li
                  className={bookmarkList}
                  key={id}
                >
                  <History
                    id={id}
                    input={input}
                    result={result}
                    isBookmark={isBookmark}
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
