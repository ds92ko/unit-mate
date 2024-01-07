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
  padding: '10px 22px',
  fontSize: 32,
  fontWeight: 700
});
