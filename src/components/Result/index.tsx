import { useEffect, useRef } from 'react';
import { borderBox, scrollY } from '@/styles/layout.css';
import { resultContainer } from './index.css';
import ToggleButton from '@/components/ToggleButton';
import { bookmarkList } from '@/components/Bookmark/index.css';
import History from '@/components/History';
import Input from '@/components/Input';
import { useToggleStore } from '@/stores/toggleStore';
import { useCalcStore } from '@/stores/calcStore';
import { useHistoryStore } from '@/stores/historyStore';
import { useRouteStore } from '@/stores/routeStore';

function Result() {
  const { currentRoute } = useRouteStore();
  const { key } = currentRoute;
  const { toggle } = useToggleStore();
  const { calcValue } = useCalcStore();
  const { results: resultsHistory } = useHistoryStore();
  const scrollYRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollYRef.current) scrollYRef.current.scrollTop = scrollYRef.current.scrollHeight;
  }, [resultsHistory]);

  return (
    <div className={`${borderBox} ${resultContainer}`}>
      <div
        ref={scrollYRef}
        className={scrollY}
      >
        <ul>
          {resultsHistory[key] &&
            resultsHistory[key].map(({ id, inputs, results, isBookmark }) => (
              <li
                className={`${bookmarkList} recentHistory`}
                key={id}
              >
                <History
                  id={id}
                  inputs={inputs}
                  results={results}
                  isBookmark={isBookmark}
                />
              </li>
            ))}
        </ul>
      </div>
      <Input value={calcValue[key]} />
      <ToggleButton
        direction="vertical"
        onClick={() => toggle('result')}
      />
    </div>
  );
}

export default Result;
