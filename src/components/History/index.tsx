import { HistoryType } from './type';
import {
  historyBookmark,
  historyHeader,
  historyInput,
  historyResult,
  historyWrap
} from './index.css';
import { srOnly } from '@/styles/layout.css';

function History({ input, result, isBookmark }: HistoryType) {
  return (
    <article className={historyWrap}>
      <div className={historyHeader}>
        <span className={historyInput}>{input}</span>
        <button
          type="button"
          className={`${historyBookmark} ${isBookmark && 'isActive'}`}
        >
          <span className={srOnly}>bookmark</span>
        </button>
      </div>
      <p className={historyResult}>= {result}</p>
    </article>
  );
}

export default History;
