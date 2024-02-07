import { useThemeStore } from '@/stores/themeStore';
import { themeMenu, themeList, themeItem, colorInput, colorLabel } from './index.css';
import { useTheme } from '@/hooks/useTheme';
import Icon from '@/components/Icon';

function Theme() {
  const { darkMode, themeColor, toggleDarkMode } = useThemeStore();
  const { handleChangeColor } = useTheme();

  return (
    <nav className={themeMenu}>
      <ul className={themeList}>
        <li className={themeItem}>
          <label
            htmlFor="colorPicker"
            className={colorLabel}
          >
            <input
              id="colorPicker"
              type="color"
              value={themeColor}
              onChange={handleChangeColor}
              className={colorInput}
            />
            <Icon
              size={40}
              name="colorPicker"
              color="var(--theme-color)"
            />
          </label>
        </li>
        <li className={themeItem}>
          <button
            type="button"
            onClick={toggleDarkMode}
          >
            <Icon
              size={36}
              name={darkMode ? 'lightMode' : 'darkMode'}
              color="var(--theme-color)"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Theme;
