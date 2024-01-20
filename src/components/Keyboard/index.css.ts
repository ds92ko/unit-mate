import { style } from '@vanilla-extract/css';

export const keyboardContainer = style({
  flexGrow: 1,
  visibility: 'visible',
  transition: 'all ease-in-out 0.1s'
});

export const keyboardWrap = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
  "seven eight nine ac"
  "four five six dot"
  "one two three comma"
  "zero zero result result"
  `,
  height: '100%'
});

export const keyboardWrapBasic = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
  "ac ac percent plus"
  "seven eight nine multiply"
  "four five six minus"
  "zero dot result result"
  `,
  height: '100%'
});
