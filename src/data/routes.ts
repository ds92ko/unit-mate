import { ComponentType } from 'react';

import Basic from '@/pages/Basic';
import Percent from '@/pages/Percent';
import Viewport from '@/pages/Viewport';
import RemAndEm from '@/pages/RemAndEm';
import Forbidden from '@/pages/Forbidden';
import InternalServerError from '@/pages/InternalServerError';
import Maintenance from '@/pages/Maintenance';
import NotFound from '@/pages/NotFound';

type RouteData = {
  id: number;
  name: string;
  key: string;
  path: string;
  element: ComponentType<unknown>;
  index?: boolean;
};

const gnbData: RouteData[] = [
  {
    id: 1,
    name: 'Basic',
    key: 'basic',
    path: '/',
    element: Basic,
    index: true
  },
  {
    id: 2,
    name: 'Percent',
    key: 'percent',
    path: '/percent',
    element: Percent
  },
  {
    id: 3,
    name: 'Viewport',
    key: 'viewport',
    path: '/viewport',
    element: Viewport
  },
  {
    id: 4,
    name: 'REM & EM',
    key: 'remAndEm',
    path: '/rem-em',
    element: RemAndEm
  }
];

const etcData: RouteData[] = [
  {
    id: 5,
    name: 'Forbidden',
    key: 'forbidden',
    path: '/forbidden',
    element: Forbidden
  },
  {
    id: 6,
    name: 'Internal Server Error',
    key: 'internalServerError',
    path: '/internal-server-error',
    element: InternalServerError
  },
  {
    id: 7,
    name: 'Maintenance',
    key: 'maintenance',
    path: '/maintenance',
    element: Maintenance
  },
  {
    id: 8,
    name: 'Not Found',
    key: 'notFound',
    path: '/*',
    element: NotFound
  }
];

const routesData = {
  gnb: gnbData,
  etc: etcData
};

export default routesData;
