// eslint-disable-next-line @typescript-eslint/naming-convention
export type iconName = 'bookmark' | 'color' | 'mode';

// eslint-disable-next-line @typescript-eslint/naming-convention
type icon = {
  path: string;
  viewBox: string;
};

const IconSet: Record<iconName, icon> = {
  bookmark: {
    path: 'M1 17.394V1h12v16.394l-4.885-5.428a1.5 1.5 0 0 0-2.23 0L1 17.394Z',
    viewBox: '0 0 14 20'
  },
  color: {
    path: 'M48.3 34.71a3.155 3.155 0 1 1-6.31 0c0-1.194 1.482-3.346 2.415-4.58a.92.92 0 0 1 1.48 0c.933 1.235 2.416 3.386 2.416 4.58Z"/',
    viewBox: '0 0 49 46'
  },
  mode: {
    path: 'M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0v36ZM0 18.063v-.126a18.569 18.569 0 0 0 0 .126Z',
    viewBox: '0 0 36 36'
  }
};
export { IconSet };
