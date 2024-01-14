import { style } from '@vanilla-extract/css';

export const mainWrap = style({
  display: 'flex',
  gap: 32,
  marginTop: 42,
  paddingBottom: 130
});

export const sectionWrap = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 35
});
