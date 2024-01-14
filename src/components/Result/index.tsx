import { borderBox, scrollY } from '@/styles/layout.css';
import { resultcontainer } from './index.css';
import TogglButton from '@/components/ToggleButton';
import { bookmarkList } from '@/components/Bookmark/index.css';
import History from '@/components/History';
import { DataType } from '@/components/Main/type';

function Result({ data }: DataType) {
  return (
    <div className={`${borderBox} ${resultcontainer}`}>
      <div className={scrollY}>
        <ul>
          {data &&
            data.map(({ id, input, result, isBookmark }) => (
              <li
                className={`${bookmarkList} ${id && id + 1 === data.length ? 'recentHistory' : ''}`}
                key={`${id}_result`}
              >
                <History
                  input={input}
                  result={result}
                  isBookmark={isBookmark}
                />
              </li>
            ))}
        </ul>
      </div>
      <TogglButton direction="vertical" />
    </div>
  );
}

export default Result;
