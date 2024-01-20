import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer, bookmarkGuide, bookmarkList } from './index.css';
import History from '@/components/History';
import ToggleButton from '@/components/ToggleButton';
import { useHistoryStore } from '@/stores/historyStore';
import { useToggleStore } from '@/stores/toggleStore';

function Bookmark() {
  const { toggleState, toggle } = useToggleStore();
  const { activeTab, bookmarks, toggleBookmark } = useHistoryStore();
  const tabBookmarks = bookmarks[activeTab] || [];

  return (
    <aside className={`${borderBox} ${bookmarkContainer} ${toggleState.bookmark ? 'isOpen' : ''}`}>
      <div className={`${bookmark} ${scrollY}`}>
        {toggleState.bookmark && (
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
        )}
      </div>
      <ToggleButton
        direction="horizontal"
        onClick={() => toggle('bookmark')}
      />
    </aside>
  );
}

export default Bookmark;
