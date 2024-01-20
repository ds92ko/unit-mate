import { style } from '@vanilla-extract/css';
import vars from '@/styles/vars.css';
import { pretendard } from '@/styles/global.css';

export const guideInfoContainer = style({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  selectors: {
    '&.themeDark': {
      backgroundColor: vars.color.black1
    }
  }
});

export const guideInfo = style({
  display: 'flex',
  width: '100%',
  maxWidth: 1140,
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  fontFamily: pretendard,
  justifyContent: 'space-between',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  selectors: {
    '&.isMaintenance': {
      maxWidth: 'none',
      gap: 50,
      justifyContent: 'initial',
      flexDirection: 'column-reverse'
    }
  }
});

export const guideInfoTitle = style({
  fontSize: 40,
  fontWeight: 900,
  color: vars.color.black,
  textAlign: 'left',
  lineHeight: 1.3,
  whiteSpace: 'pre-wrap',
  selectors: {
    [`${guideInfo}.isMaintenance &`]: {
      textAlign: 'center'
    },
    [`${guideInfoContainer}.themeDark &`]: {
      color: vars.color.white
    }
  }
});

export const guideInfoDescription = style({
  marginTop: 18,
  fontSize: 28,
  color: vars.color.black,
  textAlign: 'left',
  lineHeight: 1.3,
  whiteSpace: 'pre-wrap',
  selectors: {
    [`${guideInfo}.isMaintenance &`]: {
      marginTop: 31,
      textAlign: 'center'
    },
    [`${guideInfoContainer}.themeDark &`]: {
      color: vars.color.white
    }
  }
});

export const guideInfoButton = style({
  marginTop: 72,
  padding: '13px 42px',
  fontSize: 24,
  lineHeight: '29px',
  color: vars.color.white,
  backgroundColor: vars.color.black1,
  borderRadius: 40,
  cursor: 'pointer',
  selectors: {
    [`${guideInfoDescription} + &`]: {
      marginTop: 46
    },
    [`${guideInfoContainer}.themeDark &`]: {
      color: vars.color.black1,
      backgroundColor: vars.color.white
    }
  }
});
