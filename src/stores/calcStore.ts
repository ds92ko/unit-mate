import { create } from 'zustand';

type CalcValue = {
  [key: string]: string;
};

type CalcStore = {
  calcValue: CalcValue;
  setCalcValue: (key: string, value: string) => void;
  resetCalcValue: (key: string) => void;
  backspaceCalcValue: (key: string) => void;
};

export const useCalcStore = create<CalcStore>(set => ({
  calcValue: {
    basic: '',
    percent: '',
    viewport: '',
    remAndEm: ''
  },
  setCalcValue: (key, value) =>
    set(({ calcValue }) => {
      const currentValue = calcValue[key] || '';
      const newValue = currentValue + value;

      if (key !== 'basic') {
        const newValueArr = newValue.split(',');

        if (newValueArr[0]?.startsWith('.') || newValueArr[1]?.startsWith('.')) {
          return { calcValue };
        }
      } else if (
        newValue.startsWith('/') ||
        newValue.startsWith('*') ||
        newValue.startsWith('%') ||
        newValue.startsWith('+')
      ) {
        return { calcValue };
      }

      return {
        calcValue: {
          ...calcValue,
          [key]: newValue
        }
      };
    }),
  resetCalcValue: key =>
    set(({ calcValue }) => ({
      calcValue: {
        ...calcValue,
        [key]: ''
      }
    })),

  backspaceCalcValue: key => {
    set(({ calcValue }) => ({
      calcValue: {
        ...calcValue,
        [key]: calcValue[key].slice(0, -1) // 현재 입력된 값에서 마지막 문자를 제거
      }
    }));
  }
}));
