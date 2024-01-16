import { style } from '@vanilla-extract/css';

export const themeMenu = style({
  flexShrink: 0
});

export const themeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 45
});

export const themeItem = style({});

export const colorInput = style({
  width: 0,
  height: 0,
  padding: 0,
  visibility: 'hidden'
});

export const colorLabel = style({
  cursor: 'pointer'
});
