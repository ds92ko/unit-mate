import { MouseEvent } from 'react';
import uuid from 'react-uuid';
import * as math from 'mathjs';
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
    { label: '÷', value: '/', gridArea: 'divide' },
    { label: '7', gridArea: 'seven' },
    { label: '8', gridArea: 'eight' },
    { label: '9', gridArea: 'nine' },
    { label: 'x', value: '*', gridArea: 'multiply' },
    { label: '4', gridArea: 'four' },
    { label: '5', gridArea: 'five' },
    { label: '6', gridArea: 'six' },
    { label: '-', gridArea: 'subtract' },
    { label: '1', gridArea: 'one' },
    { label: '2', gridArea: 'two' },
    { label: '3', gridArea: 'three' },
    { label: '+', gridArea: 'add' },
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
    basic: () => {
      try {
        return {
          inputs: [calcValue.basic],
          results: [math.evaluate(calcValue.basic)]
        };
      } catch (error) {
        return {
          inputs: null,
          results: null
        };
      }
    },
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
        results: [`${Number(toUnit.toFixed(6))}%`, `${Number(toPx.toFixed(6))}`]
      };
    },
    viewport: () => {
      const valueArray = calcValue.viewport.split(',');
      const firstValue = Number(valueArray[0]);
      const lastValue = Number(valueArray[1]);

      if (calcValue.viewport.length === 0 || valueArray.length < 2 || !valueArray[1]) {
        return {
          inputs: null,
          results: null
        };
      }

      const toUnit = (lastValue / firstValue) * 100;
      const toPx = (lastValue * firstValue) / 100;

      return {
        inputs: [`${firstValue}px, ${lastValue}px`, `${firstValue}px, ${lastValue}vw/vh`],
        results: [`${Number(toUnit.toFixed(6))}vw/vh`, `${Number(toPx.toFixed(6))}px`]
      };
    },
    remAndEm: () => {
      const valueArray = calcValue.remAndEm.split(',');
      const firstValue = Number(valueArray[0]);
      const lastValue = Number(valueArray[1]);

      if (calcValue.remAndEm.length === 0 || valueArray.length < 2 || !valueArray[1]) {
        return {
          inputs: null,
          results: null
        };
      }

      const toUnit = lastValue / firstValue;
      const toPx = lastValue * firstValue;

      return {
        inputs: [`${firstValue}px, ${lastValue}px`, `${firstValue}px, ${lastValue}rem/em`],
        results: [`${Number(toUnit.toFixed(6))}rem/em`, `${Number(toPx.toFixed(6))}px`]
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
