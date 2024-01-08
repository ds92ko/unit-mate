import { style } from '@vanilla-extract/css';
import vars from '@/styles/vars.css';

export const toggleButton = style({
  position: 'absolute',
  backgroundColor: vars.color.black1,
  cursor: 'pointer',
  '::after': {
    content: '',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: vars.color.white
  }
});

export const toggleButtonHorizontal = style({
  top: '50%',
  transform: 'translateY(-50%)',
  right: -10,
  width: 10,
  height: '46.85%',
  borderRadius: '0 4px 4px 0',
  '::after': {
    width: 2,
    height: 111
  }
});

export const toggleButtonVertical = style({
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: -10,
  width: '46.85%',
  height: 10,
  borderRadius: '4px 0 0 4px',
  '::after': {
    width: 111,
    height: 2
  }
});
