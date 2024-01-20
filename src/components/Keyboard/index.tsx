import { useLocation } from 'react-router-dom';

import { MouseEvent } from 'react';
import KeyButton from '@/components/KeyButton';
import { borderBox } from '@/styles/layout.css';
import { keyboardContainer, keyboardWrap, keyboardWrapBasic } from './index.css';

const keyboardButtons = {
  basic: [
    { label: 'AC', gridArea: 'ac' },
    { label: '%', gridArea: 'percent' },
    { label: '+', gridArea: 'plus' },
    { label: '7', gridArea: 'seven' },
    { label: '8', gridArea: 'eight' },
    { label: '9', gridArea: 'nine' },
    { label: 'x', gridArea: 'multiply' },
    { label: '4', gridArea: 'four' },
    { label: '5', gridArea: 'five' },
    { label: '6', gridArea: 'six' },
    { label: '-', gridArea: 'minus' },
    { label: '0', gridArea: 'zero' },
    { label: '.', gridArea: 'dot' },
    { label: '=', gridArea: 'result' }
  ],
  alternate: [
    { label: '7', gridArea: 'seven' },
    { label: '8', gridArea: 'eight' },
    { label: '9', gridArea: 'nine' },
    { label: 'AC', gridArea: 'ac' },
    { label: '4', gridArea: 'four' },
    { label: '5', gridArea: 'five' },
    { label: '6', gridArea: 'six' },
    { label: '.', gridArea: 'dot' },
    { label: '1', gridArea: 'one' },
    { label: '2', gridArea: 'two' },
    { label: '3', gridArea: 'three' },
    { label: ',', gridArea: 'comma' },
    { label: '0', gridArea: 'zero' },
    { label: '=', gridArea: 'result' }
  ]
};

function Keyboard() {
  const location = useLocation();
  const { pathname } = location;
  const isBasic = pathname === '/';
  const keyboardWrapClassName = isBasic ? keyboardWrapBasic : keyboardWrap;
  const buttonKey = isBasic ? 'basic' : 'alternate';

  const handleClickKey = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div className={`${borderBox} ${keyboardContainer}`}>
      <div className={keyboardWrapClassName}>
        {keyboardButtons[buttonKey].map(({ label, gridArea }) => (
          <KeyButton
            key={gridArea}
            label={label}
            gridArea={gridArea}
            onClick={handleClickKey}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
