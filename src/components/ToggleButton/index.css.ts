import { style } from '@vanilla-extract/css';

export const toggleButton = style({
  position: 'absolute',
  backgroundColor: 'var(--theme-color)',
  cursor: 'pointer',
  '::after': {
    content: '',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--theme-background)'
  },
  selectors: {
    '&.horizontal': {
      top: '50%',
      transform: 'translateY(-50%)',
      right: -10,
      width: 10,
      height: '46.85%',
      borderRadius: '0 4px 4px 0'
    },
    '&.horizontal::after': {
      width: 2,
      height: 111
    },
    '&.vertical': {
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -10,
      width: '46.85%',
      height: 10,
      borderRadius: '0 0 4px 4px'
    },
    '&.vertical::after': {
      width: 111,
      height: 2
    }
  }
});
