import { style } from '@vanilla-extract/css';

export const contents = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 20,
  height: '100%'
});

export const logo = style({
  fontSize: 40,
  fontWeight: 900,
  padding: '13px 23px',
  flexShrink: 0,
  fontFamily: 'Arial Black, sans-serif'
});
