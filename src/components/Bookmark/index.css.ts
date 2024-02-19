import { style } from '@vanilla-extract/css';
import { resultContainer } from '@/components/Result/index.css';

export const bookmarkContainer = style({
  padding: '29px 0',
  position: 'relative'
});

export const bookmarkList = style({
  selectors: {
    '& + &': {
      marginTop: 10
    },
    [`${resultContainer} & + &`]: {
      marginTop: 34
    }
  }
});

export const bookmarkGuide = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 18,
  fontWeight: 'bold'
});

export const bookmark = style({
  minWidth: 0,
  maxWidth: 0,
  height: 'calc(100vh - 224px)', // 224px = headerHeight 82 + headerMainGap 42 + mainPaddingBottom 42 + bookmarkContainerPaddingTop 39 + bookmarkContainerPaddingBottom 39
  selectors: {
    [`${bookmarkContainer}.isOpen &`]: {
      padding: '0 28px',
      minWidth: 338
    }
  }
});
