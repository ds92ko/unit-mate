import { create } from 'zustand';
import vars from '@/styles/vars.css';

type ThemeStore = {
  darkMode: boolean;
  themeColor: string;
  toggleDarkMode: () => void;
  setThemeColor: (themeColor: string) => void;
};

export const useThemeStore = create<ThemeStore>(set => ({
  darkMode: false,
  themeColor: vars.color.black1,
  toggleDarkMode: () =>
    set(state => ({
      darkMode: !state.darkMode,
      themeColor: !state.darkMode ? vars.color.white : vars.color.black1
    })),
  setThemeColor: themeColor => set({ themeColor })
}));
