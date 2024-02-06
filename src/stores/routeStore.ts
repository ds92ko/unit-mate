import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type RouteData = {
  id: number;
  key: string;
  path: string;
  index?: boolean;
};

type RouteStore = {
  currentRoute: RouteData;
  setCurrentRoute: (route: RouteData) => void;
};

export const useRouteStore = create<RouteStore>()(
  persist(
    set => ({
      currentRoute: {
        id: 1,
        key: 'basic',
        path: '/',
        index: true
      },
      setCurrentRoute: route => set({ currentRoute: route })
    }),
    { name: 'routeStore' }
  )
);
