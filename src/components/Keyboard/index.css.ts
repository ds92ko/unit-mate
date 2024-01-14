import { style } from '@vanilla-extract/css';
import { resultcontainer } from '@/components/Result/index.css';

export const keyboardContainer = style({
  display: 'grid',
  visibility: 'visible',
  transition: 'all ease-in-out 0.1s',
  selectors: {
    [`${resultcontainer}.isOpen + &`]: {
      visibility: 'hidden'
    }
  }
});
