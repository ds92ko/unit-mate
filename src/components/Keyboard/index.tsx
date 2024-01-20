import { borderBox } from '@/styles/layout.css';
import KeyButton from './button';
import { keyboardContainer, keyboardWrap, keyboardWrapBasic, resultButton } from './index.css';

function Keyboard() {
  const currentPath = window.location.pathname;
  return (
    <div className={`${borderBox} ${keyboardContainer}`}>
      {currentPath === '/' ? (
        <div className={keyboardWrapBasic}>
          <KeyButton
            label="AC"
            gridArea="ac"
          />
          <KeyButton
            label="%"
            gridArea="percent"
          />
          <KeyButton
            label="+"
            gridArea="plus"
          />
          <KeyButton
            label="7"
            gridArea="seven"
          />
          <KeyButton
            label="8"
            gridArea="eight"
          />
          <KeyButton
            label="9"
            gridArea="nine"
          />
          <KeyButton
            label="x"
            gridArea="multiply"
          />
          <KeyButton
            label="4"
            gridArea="four"
          />
          <KeyButton
            label="5"
            gridArea="five"
          />
          <KeyButton
            label="6"
            gridArea="six"
          />
          <KeyButton
            label="-"
            gridArea="minus"
          />
          <KeyButton
            label="0"
            gridArea="zero"
          />
          <KeyButton
            label="."
            gridArea="dot"
          />
          <KeyButton
            label="="
            gridArea="result"
            className={resultButton}
          />
        </div>
      ) : (
        <div className={keyboardWrap}>
          <KeyButton
            label="7"
            gridArea="seven"
          />
          <KeyButton
            label="8"
            gridArea="eight"
          />
          <KeyButton
            label="9"
            gridArea="nine"
          />
          <KeyButton
            label="AC"
            gridArea="ac"
          />
          <KeyButton
            label="4"
            gridArea="four"
          />
          <KeyButton
            label="5"
            gridArea="five"
          />
          <KeyButton
            label="6"
            gridArea="six"
          />
          <KeyButton
            label="."
            gridArea="dot"
          />
          <KeyButton
            label="1"
            gridArea="one"
          />
          <KeyButton
            label="2"
            gridArea="two"
          />
          <KeyButton
            label="3"
            gridArea="three"
          />
          <KeyButton
            label=","
            gridArea="comma"
          />
          <KeyButton
            label="0"
            gridArea="zero"
          />
          <KeyButton
            label="="
            gridArea="result"
            className={resultButton}
          />
        </div>
      )}
    </div>
  );
}

export default Keyboard;
