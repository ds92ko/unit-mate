import { borderBox } from '@/styles/layout.css';
import KeyButton from './KeyButton';
import {
  keyboardContainer,
  keyboardWrap,
  keyboardItemsBasic,
  keyboardItems,
  resultButton
} from './index.css';

function Keybord() {
  const currentPath = window.location.pathname;
  return (
    <div className={`${borderBox} ${keyboardContainer}`}>
      {currentPath === '/' ? (
        <ul className={keyboardWrap}>
          <li className={keyboardItemsBasic}>
            <KeyButton label="7" />
            <KeyButton label="8" />
            <KeyButton label="9" />
            <KeyButton label="AC" />
          </li>
          <li className={keyboardItemsBasic}>
            <KeyButton label="4" />
            <KeyButton label="5" />
            <KeyButton label="6" />
            <KeyButton label="." />
          </li>
          <li className={keyboardItemsBasic}>
            <KeyButton label="1" />
            <KeyButton label="2" />
            <KeyButton label="3" />
            <KeyButton label="," />
          </li>
          <li className={keyboardItemsBasic}>
            <KeyButton label="0" />
            <KeyButton
              addClassName={resultButton}
              label="="
            />
          </li>
        </ul>
      ) : (
        <ul className={keyboardWrap}>
          <li className={keyboardItems}>
            <KeyButton label="AC" />
            <KeyButton label="%" />
            <KeyButton label="+" />
          </li>
          <li className={keyboardItems}>
            <KeyButton label="7" />
            <KeyButton label="8" />
            <KeyButton label="9" />
            <KeyButton label="x" />
          </li>
          <li className={keyboardItems}>
            <KeyButton label="4" />
            <KeyButton label="5" />
            <KeyButton label="6" />
            <KeyButton label="-" />
          </li>
          <li className={keyboardItems}>
            <KeyButton label="0" />
            <KeyButton label="." />
            <KeyButton
              addClassName={resultButton}
              label="="
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Keybord;
