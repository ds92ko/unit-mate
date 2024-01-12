import { style } from '@vanilla-extract/css';

export const contents = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 20,
  height: 128,
  marginBottom: 40
});

export const logo = style({
  fontSize: 40,
  fontWeight: 900,
  padding: 23,
  flexShrink: 0
});
