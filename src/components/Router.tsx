import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import routesData from '@/data/routes';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routesData.map(({ path, element: Component, index }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
            index={index}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default Router;
