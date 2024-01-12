import { ChangeEvent, useEffect } from 'react';
import { useThemeStore } from '@/stores/themeStore';
import vars from '@/styles/vars.css';

export const useTheme = () => {
  const { darkMode, themeColor, setThemeColor } = useThemeStore();

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setThemeColor(value);
  };

  useEffect(() => {
    const background = darkMode ? vars.color.black1 : vars.color.white;
    document.documentElement.style.setProperty('--theme-background', `${background}`);
    document.documentElement.style.setProperty('--theme-color', `${themeColor}`);
  }, [darkMode, themeColor]);

  return {
    handleChangeColor
  };
};
