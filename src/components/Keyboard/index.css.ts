import { style } from '@vanilla-extract/css';

export const keyboardContainer = style({
  flexGrow: 1,
  visibility: 'visible',
  height: 'calc((100vh - 201px) / 2)' // 201px = headerHeight 82 + headerMainGap 42 + mainPaddingBottom 42 + resultKeyboardGap 35
});

export const keyboardWrap = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
    "seven eight nine   clearAll"
    "four  five  six    dot     "
    "one   two   three  comma   "
    "zero  zero  result result  "
  `,
  height: '100%'
});

export const keyboardWrapBasic = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
    "clearAll clearAll remainder divide  "
    "seven    eight    nine      multiply"
    "four     five     six       subtract"
    "one      two      three     add     "
    "zero     zero     dot       result  "
  `,
  height: '100%'
});
