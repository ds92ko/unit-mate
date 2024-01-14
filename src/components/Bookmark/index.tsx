import { borderBox, scrollY } from '@/styles/layout.css';
import { bookmark, bookmarkContainer, bookmarkGuide, bookmarkList } from './index.css';
import History from '@/components/History';
import TogglButton from '@/components/ToggleButton';
import { DataType } from '@/components/Main/type';

function Bookmark({ data }: DataType) {
  const bookmarkData = data && data.filter(dataList => dataList.isBookmark);
  return (
    <aside className={`${borderBox} ${bookmarkContainer}`}>
      <div className={`${bookmark} ${scrollY}`}>
        <div>
          {bookmarkData ? (
            <ul>
              {bookmarkData.map(({ id, input, result, isBookmark }) => (
                <li
                  className={bookmarkList}
                  key={`${id}_bookmark`}
                >
                  <History
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
      <TogglButton direction="horizontal" />
    </aside>
  );
}

export default Bookmark;
