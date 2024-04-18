import { style } from '@vanilla-extract/css';

export const resultContainer = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '36px 48px',
  height: 'calc((100vh - 201px) / 2)' // 201px = headerHeight 82 + headerMainGap 42 + mainPaddingBottom 42 + resultKeyboardGap 35
});
