import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ToggleState = {
  bookmark: boolean;
  result: boolean;
};

type ToggleStore = {
  toggleState: ToggleState;
  toggle: (key: keyof ToggleState) => void;
};

export const useToggleStore = create(
  persist<ToggleStore>(
    set => ({
      toggleState: {
        bookmark: true,
        result: false
      },
      toggle: (key: keyof ToggleState) =>
        set(state => ({
          toggleState: {
            ...state.toggleState,
            [key]: !state.toggleState[key]
          }
        }))
    }),
    {
      name: 'toggleStore'
    }
  )
);
