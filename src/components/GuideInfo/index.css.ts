import { style } from '@vanilla-extract/css';
import vars from '@/styles/vars.css';

export const guideInfo = style({
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  gap: 67,
  textAlign: 'center',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  selectors: {
    '&.isMaintenance': {
      gap: 50,
      flexDirection: 'column-reverse'
    }
  }
});

export const guideInfoTitle = style({
  fontSize: 40,
  fontWeight: 'bold',
  color: '#000',
  lineHeight: 1.3,
  whiteSpace: 'pre-wrap'
});

export const guideInfoDescription = style({
  marginTop: 16,
  fontSize: 28,
  color: '#000',
  lineHeight: 1.3,
  whiteSpace: 'pre-wrap'
});

export const guideInfoButton = style({
  marginTop: 35,
  padding: '13px 38px',
  fontSize: 24,
  fontWeight: 'bold',
  color: vars.color.white,
  backgroundColor: vars.color.black1,
  borderRadius: 40,
  cursor: 'pointer'
});

export const guideInfoIcon = style({
  width: 342,
  height: 303,
  border: '1px solid #000'
});
