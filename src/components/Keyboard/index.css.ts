import { style } from '@vanilla-extract/css';
import { resultcontainer } from '@/components/Result/index.css';

export const keyboardContainer = style({
  flexGrow: 1,
  visibility: 'visible',
  transition: 'all ease-in-out 0.1s',
  selectors: {
    [`${resultcontainer}.isOpen + &`]: {
      visibility: 'hidden'
    }
  }
});

export const keyboardWrap = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  height: '100%'
});

export const keyboardItemsBasic = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  selectors: {
    [`&:last-child`]: {
      gridTemplateColumns: '2fr 2fr'
    }
  }
});

export const keyboardItems = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  selectors: {
    [`&:first-child`]: {
      gridTemplateColumns: ' 2fr repeat(2, 1fr)'
    },
    [`&:last-child`]: {
      gridTemplateColumns: 'repeat(2, 1fr) 2fr'
    }
  }
});

export const keyboardButton = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 64,
  margin: 10,
  borderRadius: 40,
  overflow: 'hidden',
  fontSize: 24,
  fontWeight: 700,
  color: 'var(--theme-color)',
  selectors: {
    '&:hover::before': {
      display: 'block',
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--theme-color)',
      opacity: '0.5'
    },
    '&:active': {
      color: 'var(--theme-background)',
      backgroundColor: 'var(--theme-color)'
    }
  }
});

export const resultButton = style({
  color: 'var(--theme-background)',
  backgroundColor: 'var(--theme-color)',
  selectors: {
    '&:hover::before': {
      backgroundColor: 'var(--theme-background)'
    },
    '&:active': {
      color: 'var(--theme-color)',
      backgroundColor: 'var(--theme-background)'
    }
  }
});

export const keyboardButtonText = style({
  zIndex: 1
});
