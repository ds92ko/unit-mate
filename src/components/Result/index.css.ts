import { style } from '@vanilla-extract/css';

export const resultcontainer = style({
  position: 'relative',
  padding: 16,
  minHeight: '52.6%' /* Bookmark 높이 기준 Result 높이의 비율 계산 결과 */,
  transition: 'all ease-in-out 0.2s',
  selectors: {
    '&.isOpen': {
      flex: 1
    }
  }
});
