import { style } from '@vanilla-extract/css';

export const app = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '82px 1fr',
  gap: 42
});

export const container = style({
  minWidth: 1496,
  padding: '0 40px',
  margin: '0 auto',
  height: '100%'
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
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    backgroundColor: 'transparent'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--theme-color)',
    border: '4px solid var(--theme-background)',
    borderRadius: 14
  }
});

export const borderBox = style({
  border: `2px solid var(--theme-color)`,
  borderRadius: 12
});
