import { useThemeStore } from '@/stores/themeStore';
import { themeMenu, themeList } from './index.css';
import { useTheme } from '@/hooks/useTheme';
import Icon from '@/components/Icon';

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
          <Icon
            width={49}
            height={46}
            name="color"
          />
        </li>
        <li>
          <button
            type="button"
            onClick={toggleDarkMode}
          >
            <Icon
              width={36}
              height={36}
              name="mode"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Theme;
