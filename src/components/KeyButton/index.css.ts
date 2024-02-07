import { style } from '@vanilla-extract/css';

export const keyboardButton = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
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
