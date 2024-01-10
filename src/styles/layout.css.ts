import { style } from '@vanilla-extract/css';

export const container = style({
  minWidth: 1440,
  padding: '0 40px',
  margin: '0 auto'
});

export const srOnly = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  border: 0
});

export const scrollY = style({
  overflowY: 'auto',
  maxHeight: 'calc(100% - 32px)'
});

export const borderBox = style({
  border: `2px solid var(--theme-color)`,
  borderRadius: 12
});
