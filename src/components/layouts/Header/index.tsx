import { container } from '@/styles/layout.css';
import { contents, logo } from './index.css';
import Gnb from '@/components/layouts/Gnb';
import Theme from '@/components/layouts/Theme';

function Header() {
  return (
    <header>
      <div className={container}>
        <div className={contents}>
          <div className={logo}>UNITMATE</div>
          <Gnb />
          <Theme />
        </div>
      </div>
    </header>
  );
}

export default Header;
