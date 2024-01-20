import { MouseEventHandler } from 'react';

export interface ToggleType {
  direction: 'vertical' | 'horizontal';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
