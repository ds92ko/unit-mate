import { fontFace, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  fontFamily: 'Arial, sans-serif',
  background: 'var(--theme-background)',
  color: 'var(--theme-color)'
});

export const pretendard = fontFace({
  src: 'local("Pretendard-SemiBold")'
});
