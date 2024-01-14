import React from 'react';

export interface ToggleType {
  direction: 'vertical' | 'horizontal';
  isBookmarkOpen?: boolean;
  setiIsBookmarkOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isResultOpen?: boolean;
  setiIsResultOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
