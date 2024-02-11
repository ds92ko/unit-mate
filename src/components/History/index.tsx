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
            <p
              key={result}
              className={historyResult}
            >
              = {result}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default History;
