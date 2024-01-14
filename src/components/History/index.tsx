import { HistoryType } from './type';
import {
  historyBookmark,
  historyHeader,
  historyInput,
  historyResult,
  historyWrap
} from './index.css';
import { srOnly } from '@/styles/layout.css';
import { useHistoryStore } from '@/stores/historyStore';

function History({ id, input, result, isBookmark }: HistoryType) {
  const { toggleBookmark } = useHistoryStore();

  return (
    <article className={historyWrap}>
      <div className={historyHeader}>
        <span className={historyInput}>{input}</span>
        <button
          type="button"
          onClick={() => toggleBookmark(id)}
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
