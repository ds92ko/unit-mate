import { style } from '@vanilla-extract/css';
import vars from '@/styles/vars.css';

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
  color: vars.alpha.black5,
  selectors: {
    '&:has(.active)': {
      color: vars.color.black1
    },
    '&:has(.active)::after': {
      content: '',
      position: 'absolute',
      bottom: -10,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'inline-block',
      width: 'calc(100% - 22px)',
      height: 5,
      backgroundColor: vars.color.black1,
      borderRadius: 14
    }
  }
});
