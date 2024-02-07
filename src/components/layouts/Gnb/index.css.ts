import { style } from '@vanilla-extract/css';

export const gnb = style({
  flexGrow: 1
});

export const gnbList = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  maxWidth: 890
});

export const gnbItem = style({
  position: 'relative',
  padding: '10px 22px',
  fontSize: 32,
  fontWeight: 700,
  color: 'var(--theme-color)',
  opacity: 0.5,
  selectors: {
    '&:has(.active)': {
      color: 'var(--theme-color)',
      opacity: 1
    },
    '&:has(.active)::after': {
      content: '',
      position: 'absolute',
      top: 'calc(100% - 5px)',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'inline-block',
      width: 'calc(100% - 22px)',
      height: 5,
      backgroundColor: 'var(--theme-color)',
      borderRadius: 14
    }
  }
});
