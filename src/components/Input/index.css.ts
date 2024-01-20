import { style } from '@vanilla-extract/css';

export const InputContents = style({
  width: '100%',
  fontSize: 64,
  fontWeight: 900,
  textAlign: 'right',
  color: 'var(--theme-color)',
  '::placeholder': {
    opacity: 0.5,
    fontSize: 24,
    textAlign: 'left'
  },
  ':focus-visible': {
    outline: 'none'
  }
});
