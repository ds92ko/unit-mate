import { HistoryType } from './type';
import { historyHeader, historyInput, historyResult, historyWrap } from './index.css';
import { srOnly } from '@/styles/layout.css';
import Icon from '@/components/Icon';

function History({ input, result, isBookmark, onToggleBookmark }: HistoryType) {
  return (
    <article className={historyWrap}>
      <div className={historyHeader}>
        <span className={historyInput}>{input}</span>
        <button
          type="button"
          onClick={onToggleBookmark}
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
