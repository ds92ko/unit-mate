import { NavLink } from 'react-router-dom';
import { gnb, gnbList, gnbItem } from './index.css';
import routesData from '@/data/routes';
import { useRouteStore } from '@/stores/routeStore';

function Nav() {
  const { setCurrentRoute } = useRouteStore();
  return (
    <nav className={gnb}>
      <ul className={gnbList}>
        {routesData.gnb.map(({ id, name, key, path, index }) => (
          <li
            key={id}
            className={gnbItem}
          >
            <NavLink
              to={path}
              onClick={() => setCurrentRoute({ id, key, path, index })}
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
