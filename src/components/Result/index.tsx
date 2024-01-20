import { borderBox, scrollY } from '@/styles/layout.css';
import { resultContainer } from './index.css';
import ToggleButton from '@/components/ToggleButton';
import { bookmarkList } from '@/components/Bookmark/index.css';
import History from '@/components/History';
import { DataType } from '@/components/Main/type';
import Input from '@/components/Input';
import { useToggleStore } from '@/stores/toggleStore';

function Result({ data }: DataType) {
  const { toggleState, toggle } = useToggleStore();

  return (
    <div className={`${borderBox} ${resultContainer} ${toggleState.result ? 'isOpen' : ''}`}>
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
      <ToggleButton
        direction="vertical"
        onClick={() => toggle('result')}
      />
    </div>
  );
}

export default Result;
