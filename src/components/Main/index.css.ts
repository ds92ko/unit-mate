import { style } from '@vanilla-extract/css';

export const mainWrap = style({
  display: 'flex',
  gap: 32,
  paddingBottom: 42,
  height: '100%'
});

export const sectionWrap = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 35
});
