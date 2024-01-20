import { useLocation } from 'react-router-dom';

import { borderBox } from '@/styles/layout.css';
import KeyButton from './button';
import { keyboardContainer, keyboardWrap, keyboardWrapBasic, resultButton } from './index.css';

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
    { label: '=', gridArea: 'result', className: resultButton }
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
    { label: '=', gridArea: 'result', className: resultButton }
  ]
};

function Keyboard() {
  const location = useLocation();
  const { pathname } = location;
  const isBasic = pathname === '/';
  const keyboardWrapClassName = isBasic ? keyboardWrapBasic : keyboardWrap;
  const buttonKey = isBasic ? 'basic' : 'alternate';

  return (
    <div className={`${borderBox} ${keyboardContainer}`}>
      <div className={keyboardWrapClassName}>
        {keyboardButtons[buttonKey].map(({ label, gridArea, className }) => (
          <KeyButton
            key={gridArea}
            label={label}
            gridArea={gridArea}
            className={className}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
