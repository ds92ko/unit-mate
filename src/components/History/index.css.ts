import { style } from '@vanilla-extract/css';
import { bookmarkList } from '@/components/Bookmark/index.css';
import { resultContainer } from '@/components/Result/index.css';

export const historyWrap = style({
  display: 'flex',
  paddingBottom: 12,
  gap: 12,
  flexDirection: 'column',
  borderBottom: '2px solid var(--theme-color)'
});

export const historyHeader = style({
  display: 'flex',
  justifyContent: 'flex-end'
});

export const historyBody = style({
  display: 'flex',
  justifyContent: 'center'
});

export const historyBox = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 12
});

export const historyInput = style({
  fontSize: 18,
  color: 'var(--theme-color)',
  opacity: 0.5,
  wordBreak: 'break-all',
  selectors: {
    [`${resultContainer} &`]: {
      fontSize: 28
    },
    [`${bookmarkList}.recentHistory &`]: {
      fontSize: 36
    }
  }
});

export const historyResult = style({
  color: 'var(--theme-color)',
  fontSize: 26,
  lineHeight: '30px',
  fontWeight: 'bold',
  textAlign: 'right',
  cursor: 'pointer',
  wordBreak: 'break-all',
  selectors: {
    [`${resultContainer} &`]: {
      fontSize: 32
    },
    [`${bookmarkList}.recentHistory &`]: {
      fontSize: 40,
      lineHeight: '46px'
    }
  }
});
