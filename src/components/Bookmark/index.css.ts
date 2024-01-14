import { style } from '@vanilla-extract/css';

export const bookmarkContainer = style({
  position: 'relative'
});

export const bookmark = style({
  minWidth: 0,
  maxWidth: 0,
  minHeight: '100vh',
  overflow: 'hidden',
  transition: 'all ease-in-out 0.3s',
  selectors: {
    [`${bookmarkContainer}.isOpen &`]: {
      minWidth: 338
    }
  }
});
