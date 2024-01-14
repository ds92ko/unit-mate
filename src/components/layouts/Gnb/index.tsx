import { NavLink } from 'react-router-dom';
import { gnb, gnbList, gnbItem } from './index.css';
import routesData from '@/data/routes';
import { useHistoryStore } from '@/stores/historyStore';

function Nav() {
  const { setActiveTab } = useHistoryStore();

  return (
    <nav className={gnb}>
      <ul className={gnbList}>
        {routesData.map(({ id, name, path }) => (
          <li
            key={id}
            className={gnbItem}
          >
            <NavLink
              to={path}
              onClick={() => setActiveTab(name)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
