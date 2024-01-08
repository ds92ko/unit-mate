import { NavLink } from 'react-router-dom';
import { gnb, gnbList, gnbItem } from './index.css';
import routesData from '@/data/routes';

function Nav() {
  return (
    <nav className={gnb}>
      <ul className={gnbList}>
        {routesData.map(({ id, name, path }) => (
          <li
            key={id}
            className={gnbItem}
          >
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
