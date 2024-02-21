import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import vars from '@/styles/vars.css';

type ThemeStore = {
  darkMode: boolean;
  themeColor: string;
  toggleDarkMode: () => void;
  setThemeColor: (themeColor: string) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      darkMode: false,
      themeColor: vars.color.black1,
      toggleDarkMode: () =>
        set(state => ({
          darkMode: !state.darkMode
        })),
      setThemeColor: themeColor => set({ themeColor })
    }),
    {
      name: 'themeStore'
    }
  )
);
