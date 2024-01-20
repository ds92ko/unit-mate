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

export const keyboardItems = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  selectors: {
    [`&:first-child`]: {
      gridTemplateColumns: ' 2fr repeat(2, 1fr)'
    },
    [`&:last-child`]: {
      gridTemplateColumns: 'repeat(2, 1fr) 2fr'
    }
  }
});

export const keyboardButton = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 64,
  margin: 10,
  borderRadius: 40,
  overflow: 'hidden',
  fontSize: 24,
  fontWeight: 700,
  color: 'var(--theme-color)',
  selectors: {
    '&:hover::before': {
      display: 'block',
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--theme-color)',
      opacity: '0.5'
    },
    '&:active': {
      color: 'var(--theme-background)',
      backgroundColor: 'var(--theme-color)'
    }
  }
});

export const resultButton = style({
  color: 'var(--theme-background)',
  backgroundColor: 'var(--theme-color)',
  selectors: {
    '&:hover::before': {
      backgroundColor: 'var(--theme-background)'
    },
    '&:active': {
      color: 'var(--theme-color)',
      backgroundColor: 'var(--theme-background)'
    }
  }
});

export const keyboardButtonText = style({
  zIndex: 1
});
