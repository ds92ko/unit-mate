import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import routesData from '@/data/routes';
import NotFound from '@/pages/NotFound';
import Forbidden from '@/pages/Forbidden';
import InternalServerError from '@/pages/InternalServerError';
import Maintenance from '@/pages/Maintenance';

function Router() {
  const isUnderMaintenance = true; // 서버 점검 상태값
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
      {/* S: 에러 페이지 확인을 위한 임시 라우터 설정 */}
      <Route
        path="/forbidden"
        element={<Forbidden />}
      />
      <Route
        path="/internal-server-error"
        element={<InternalServerError />}
      />
      {isUnderMaintenance && (
        <Route
          path="/maintenance"
          element={<Maintenance />}
        />
      )}
      <Route
        path="/*"
        element={<NotFound />}
      />
      {/* E: 에러 페이지 확인을 위한 임시 라우터 설정 */}
    </Routes>
  );
}

export default Router;
