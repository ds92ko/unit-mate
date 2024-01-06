import React from 'react';
import styles from './index.module.css';
import { ReactComponent as Bookmark } from '/images/common/ic_bookmark_light.svg';
import { ReactComponent as ColorType } from '/images/common/ic_color_light.svg';
import { ReactComponent as ModeType } from '/images/common/ic_mode_light.svg';

interface IconButtonProps {
  onClick: () => void;
  iconName: 'Bookmark' | 'ColorType' | 'ModeType';
}

interface TextButtonProps {
  text: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, onClick }) => {
  let icon;
  switch (iconName) {
    case 'Bookmark':
      icon = <Bookmark className={styles.bookmark} />;
      break;
    case 'ColorType':
      icon = <ColorType className={styles.colorType} />;
      break;
    case 'ModeType':
      icon = <ModeType className={styles.modeType} />;
      break;
    default:
      throw new Error('Invalid icon type');
  }
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className={styles.textButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default { IconButton, TextButton };
