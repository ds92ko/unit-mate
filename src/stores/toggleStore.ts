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

export const useToggleStore = create<ToggleStore>()(
  persist(
    set => ({
      toggleState: {
        bookmark: true,
        result: false
      },
      toggle: key =>
        set(({ toggleState }) => ({
          toggleState: {
            ...toggleState,
            [key]: !toggleState[key]
          }
        }))
    }),
    {
      name: 'toggleStore'
    }
  )
);
