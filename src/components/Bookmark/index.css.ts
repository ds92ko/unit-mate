import { style } from '@vanilla-extract/css';
import { resultcontainer } from '@/components/Result/index.css';

export const bookmark = style({
  padding: '0 28px',
  minWidth: 338,
  minHeight: 779
});

export const bookmarkContainer = style({
  padding: '29px 0',
  position: 'relative'
});

export const bookmarkList = style({
  selectors: {
    '& + &': {
      marginTop: 10
    },
    [`${resultcontainer} & + &`]: {
      marginTop: 34
    }
  }
});

export const bookmarkGuide = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 18,
  fontWeight: 'bold'
});
