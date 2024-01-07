import { ComponentType } from 'react';

import Basic from '@/pages/Basic';
import Percent from '@/pages/Percent';
import Viewport from '@/pages/Viewport';
import RemAndEm from '@/pages/RemAndEm';

type RouteData = {
  id: number;
  name: string;
  path: string;
  element: ComponentType<unknown>;
  index?: boolean;
};

const routesData: RouteData[] = [
  {
    id: 1,
    name: 'Basic',
    path: '/',
    element: Basic,
    index: true
  },
  {
    id: 2,
    name: 'Percent',
    path: '/percent',
    element: Percent
  },
  {
    id: 3,
    name: 'Viewport',
    path: '/viewport',
    element: Viewport
  },
  {
    id: 4,
    name: 'REM & EM',
    path: '/rem-em',
    element: RemAndEm
  }
];

export default routesData;
