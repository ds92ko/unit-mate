import { style } from '@vanilla-extract/css';

export const resultcontainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '36px 38px',
  minHeight: '52.6%' /* Bookmark 높이 기준 Result 높이의 비율 계산 결과 */,
  transition: 'all ease-in-out 0.2s',
  selectors: {
    '&.isOpen': {
      flex: 1
    }
  }
});
