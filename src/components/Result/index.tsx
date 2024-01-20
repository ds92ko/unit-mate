import { useState } from 'react';
import { borderBox, scrollY } from '@/styles/layout.css';
import { resultcontainer } from './index.css';
import TogglButton from '@/components/ToggleButton';
import { bookmarkList } from '@/components/Bookmark/index.css';
import History from '@/components/History';
import { DataType } from '@/components/Main/type';
import Input from '@/components/Input';

function Result({ data }: DataType) {
  const [isResultOpen, setiIsResultOpen] = useState<boolean>(false);
  return (
    <div className={`${borderBox} ${resultcontainer} ${isResultOpen ? 'isOpen' : ''}`}>
      <div className={scrollY}>
        <ul>
          {data &&
            data.map(({ id, input, result, isBookmark }) => (
              <li
                className={`${bookmarkList} ${id && id + 1 === data.length ? 'recentHistory' : ''}`}
                key={`${id}_result`}
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
      </div>
      <Input />
      <TogglButton
        direction="vertical"
        isResultOpen={isResultOpen}
        setiIsResultOpen={setiIsResultOpen}
      />
    </div>
  );
}

export default Result;
