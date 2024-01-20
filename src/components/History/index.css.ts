import { style } from '@vanilla-extract/css';
import { bookmarkList } from '@/components/Bookmark/index.css';
import { resultContainer } from '@/components/Result/index.css';

export const historyWrap = style({
  display: 'flex',
  paddingBottom: 12,
  gap: 12,
  flexDirection: 'column',
  borderBottom: '2px solid var(--theme-color)',
  selectors: {
    [`${bookmarkList}.recentHistory &`]: {
      gap: 8,
      borderBottom: 0
    }
  }
});

export const historyHeader = style({
  display: 'flex',
  justifyContent: 'space-between'
});

export const historyInput = style({
  fontSize: 18,
  color: 'var(--theme-color)',
  opacity: 0.5,
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
  fontSize: 26,
  lineHeight: '30px',
  fontWeight: 'bold',
  textAlign: 'right',
  selectors: {
    [`${resultContainer} &`]: {
      fontSize: 32
    },
    [`${bookmarkList}.recentHistory &`]: {
      fontSize: 40
    }
  }
});
