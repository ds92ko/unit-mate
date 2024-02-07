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

function History({ id, inputs, results, isBookmark }: HistoryType) {
  return (
    <article
      id={id}
      className={historyWrap}
    >
      <div className={historyHeader}>
        <button type="button">
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
