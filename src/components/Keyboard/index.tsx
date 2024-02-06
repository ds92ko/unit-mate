import { MouseEvent } from 'react';
import uuid from 'react-uuid';
import KeyButton from '@/components/KeyButton';
import { borderBox } from '@/styles/layout.css';
import { keyboardContainer, keyboardWrap, keyboardWrapBasic } from './index.css';
import { useCalcStore } from '@/stores/calcStore';
import { useRouteStore } from '@/stores/routeStore';
import { useHistoryStore } from '@/stores/historyStore';

const keyboardButtons = {
  basic: [
    { label: 'AC', value: 'esc', gridArea: 'clearAll' },
    { label: '%', gridArea: 'remainder' },
    { label: '+', gridArea: 'add' },
    { label: '7', gridArea: 'seven' },
    { label: '8', gridArea: 'eight' },
    { label: '9', gridArea: 'nine' },
    { label: 'x', value: '*', gridArea: 'multiply' },
    { label: '4', gridArea: 'four' },
    { label: '5', gridArea: 'five' },
    { label: '6', gridArea: 'six' },
    { label: '-', gridArea: 'subtract' },
    { label: '0', gridArea: 'zero' },
    { label: '.', gridArea: 'dot' },
    { label: '=', value: 'enter', gridArea: 'result' }
  ],
  alternate: [
    { label: '7', gridArea: 'seven' },
    { label: '8', gridArea: 'eight' },
    { label: '9', gridArea: 'nine' },
    { label: 'AC', value: 'esc', gridArea: 'clearAll' },
    { label: '4', gridArea: 'four' },
    { label: '5', gridArea: 'five' },
    { label: '6', gridArea: 'six' },
    { label: '.', gridArea: 'dot' },
    { label: '1', gridArea: 'one' },
    { label: '2', gridArea: 'two' },
    { label: '3', gridArea: 'three' },
    { label: ',', gridArea: 'comma' },
    { label: '0', gridArea: 'zero' },
    { label: '=', value: 'enter', gridArea: 'result' }
  ]
};

type Calc = {
  [key: string]: () => { inputs: string[] | null; results: string[] | null };
};

function Keyboard() {
  const { currentRoute } = useRouteStore();
  const { index, key } = currentRoute;
  const keyboardWrapClassName = index ? keyboardWrapBasic : keyboardWrap;
  const buttonKey = index ? 'basic' : 'alternate';
  const { setResultHistory } = useHistoryStore();
  const { calcValue, setCalcValue, resetCalcValue } = useCalcStore();

  const calc: Calc = {
    percent: () => {
      const valueArray = calcValue.percent.split(',');
      const firstValue = Number(valueArray[0]);
      const lastValue = Number(valueArray[1]);

      if (calcValue.percent.length === 0 || valueArray.length < 2 || !valueArray[1]) {
        return {
          inputs: null,
          results: null
        };
      }

      const toUnit = (lastValue / firstValue) * 100;
      const toPx = (lastValue / 100) * firstValue;

      return {
        inputs: [`${firstValue}의 ${lastValue}`, `${firstValue}의 ${lastValue}%`],
        results: [`${toUnit}%`, `${toPx}`]
      };
    }
  };

  const handleClickKey = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'esc':
        resetCalcValue(key);

        break;
      case 'enter':
        const { inputs, results } = calc[key]();

        if (inputs && results) {
          setResultHistory(key, {
            id: uuid(),
            inputs,
            results,
            isBookmark: false
          });
        }
        resetCalcValue(key);

        break;
      default:
        setCalcValue(key, value);
        break;
    }
  };

  return (
    <div className={`${borderBox} ${keyboardContainer}`}>
      <div className={keyboardWrapClassName}>
        {keyboardButtons[buttonKey].map(({ label, value, gridArea }) => (
          <KeyButton
            key={gridArea}
            label={label}
            value={value || label}
            gridArea={gridArea}
            onClick={handleClickKey}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
