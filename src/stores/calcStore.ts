import { create } from 'zustand';

type CalcValue = {
  [key: string]: string;
};

type CalcStore = {
  calcValue: CalcValue;
  setCalcValue: (key: string, value: string) => void;
  resetCalcValue: (key: string) => void;
};

export const useCalcStore = create<CalcStore>(set => ({
  calcValue: {
    percent: '',
    viewport: ''
  },
  setCalcValue: (key, value) =>
    set(({ calcValue }) => {
      const currentValue = calcValue[key] || '';
      const newValue = currentValue + value;
      const newValueArr = newValue.split(',');

      if (
        newValueArr[0]?.startsWith('0') ||
        newValueArr[1]?.startsWith('0') ||
        newValueArr[0]?.startsWith('.') ||
        newValueArr[1]?.startsWith('.')
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
    }))
}));
