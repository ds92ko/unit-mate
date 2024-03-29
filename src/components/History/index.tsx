import { MouseEvent, MouseEventHandler } from 'react';
import { HistoryType } from './type';
import {
  historyBody,
  historyBox,
  historyHeader,
  historyInput,
  historyResult,
  historyWrap
} from './index.css';
import { srOnly } from '@/styles/layout.css';
import Icon from '@/components/Icon';
import { useHistoryStore } from '@/stores/historyStore';
import { useRouteStore } from '@/stores/routeStore';

function History({ id, inputs, results, isBookmark }: HistoryType) {
  const { currentRoute } = useRouteStore();
  const { key } = currentRoute;
  const { results: resultsHistory, setResultHistory, setBookmarkHistory } = useHistoryStore();

  const handleCopyResult: MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLParagraphElement;
    const text = target.textContent || '';
    const numberValue = text.match(/[-+]?[0-9]*\.?[0-9]+/);
    if (numberValue) {
      const valueToCopy = numberValue[0];
      navigator.clipboard.writeText(valueToCopy);
    }
  };

  const handleClickBookmark = () => {
    const result = {
      id,
      inputs,
      results,
      isBookmark: !isBookmark
    };
    const hasResultsHistory = resultsHistory[key].find(resultHistory => resultHistory.id === id);

    if (hasResultsHistory) {
      setResultHistory(key, result);
    }
    setBookmarkHistory(key, result);
  };

  return (
    <article
      id={id}
      className={historyWrap}
    >
      <div className={historyHeader}>
        <button
          type="button"
          onClick={handleClickBookmark}
        >
          <Icon
            size={18}
            name={isBookmark ? 'bookmarkOn' : 'bookmarkOff'}
            color="var(--theme-color)"
          />
          <span className={srOnly}>bookmark</span>
        </button>
      </div>
      <div className={historyBody}>
        <div className={historyBox}>
          {inputs.map(input => (
            <p
              key={input}
              className={historyInput}
            >
              {input}
            </p>
          ))}
        </div>
        <div className={historyBox}>
          {results.map(result => (
            <button
              type="button"
              key={result}
              className={historyResult}
              onClick={handleCopyResult}
            >
              = {result}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default History;
