import { HistoryType } from './type';
import { historyHeader, historyInput, historyResult, historyWrap } from './index.css';
import { srOnly } from '@/styles/layout.css';
import { useHistoryStore } from '@/stores/historyStore';
import Icon from '@/components/Icon';

function History({ id, input, result, isBookmark }: HistoryType) {
  const { toggleBookmark } = useHistoryStore();

  return (
    <article className={historyWrap}>
      <div className={historyHeader}>
        <span className={historyInput}>{input}</span>
        <button
          type="button"
          onClick={() => toggleBookmark(id)}
        >
          <Icon
            size={18}
            name={isBookmark ? 'bookmarkOn' : 'bookmarkOff'}
            color="var(--theme-color)"
          />
          <span className={srOnly}>bookmark</span>
        </button>
      </div>
      <p className={historyResult}>= {result}</p>
    </article>
  );
}

export default History;
