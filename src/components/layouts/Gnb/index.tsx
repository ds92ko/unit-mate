import { Link } from 'react-router-dom';
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
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
