import { Outlet } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import { container } from '@/styles/layout.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={container}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
