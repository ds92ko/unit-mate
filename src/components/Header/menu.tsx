import styles from './menu.module.css';

interface MenuProps {
  colorMode: string;
}

const Menu: React.FC<MenuProps> = ({ colorMode }) => {
  return (
    <nav className={`${styles.gnb} ${colorMode === 'dark' ? 
    styles.dark : styles.light}`}>
      <ul className={styles.gnbList}>
        <li>Basic</li>
        <li>Percent</li>
        <li>Viewport</li>
        <li>REM&EM</li>
      </ul>
    </nav>
  )
};
export default Menu;