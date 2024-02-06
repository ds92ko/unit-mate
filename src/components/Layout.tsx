import { Outlet } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import { container } from '@/styles/layout.css';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className={container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
