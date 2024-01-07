import { useThemeStore } from '@/stores/themeStore';
import { themeMenu, themeList } from './index.css';
import { useTheme } from '@/hooks/useTheme';

function Theme() {
  const { darkMode, themeColor, toggleDarkMode } = useThemeStore();
  const { handleChangeColor } = useTheme();

  return (
    <nav className={themeMenu}>
      {darkMode}
      <ul className={themeList}>
        <li>
          <input
            type="color"
            value={themeColor}
            onChange={handleChangeColor}
          />
        </li>
        <li>
          <button
            type="button"
            onClick={toggleDarkMode}
          >
            dark/light
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Theme;
