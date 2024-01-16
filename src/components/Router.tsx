import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import routesData from '@/data/routes';

function Router() {
  const { gnb, etc } = routesData;

  return (
    <Routes>
      <Route element={<Layout />}>
        {gnb.map(({ path, element: Component, index }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
            index={index}
          />
        ))}
      </Route>
      {etc.map(({ path, element: Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
}

export default Router;
