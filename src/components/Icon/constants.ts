export type IconName = 'bookmark' | 'color' | 'mode';

type PathInfo = {
  id: number;
  d: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
};
type IconInfo = {
  paths: PathInfo[];
  viewBox: string;
};

export const IconSet: Record<IconName, IconInfo> = {
  bookmark: {
    paths: [
      {
        id: 1,
        d: 'M0 .5A.5.5 0 0 1 .5 0h13a.5.5 0 0 1 .5.5v18.197a.5.5 0 0 1-.872.335l-5.756-6.397a.5.5 0 0 0-.744 0L.872 19.032A.5.5 0 0 1 0 18.697V.5Z',
        fill: '#fff',
        stroke: '',
        strokeWidth: 0
      },
      {
        id: 2,
        d: 'M2 2v12.788l3.142-3.49a2.5 2.5 0 0 1 3.716 0L12 14.787V2H2ZM14 .5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v18.197a.5.5 0 0 0 .872.335l5.756-6.397a.5.5 0 0 1 .744 0l5.756 6.397a.5.5 0 0 0 .872-.335V.5Z',
        fill: '#fff',
        stroke: '#121212',
        strokeWidth: 0
      }
    ],
    viewBox: '0 0 14 20'
  },
  color: {
    paths: [
      {
        id: 1,
        d: 'M20.69 19.666a3.889 3.889 0 1 0 0-7.777 3.889 3.889 0 0 0 0 7.777Zm0 4a7.889 7.889 0 1 0 0-15.777 7.889 7.889 0 0 0 0 15.777Z',
        fill: '#121212',
        stroke: '',
        strokeWidth: 0
      },
      {
        id: 2,
        d: 'M26.127 9.483a2 2 0 0 1 2.828 0l15.022 15.021a2 2 0 0 1 0 2.829L26.724 44.586a2 2 0 0 1-2.829 0L8.874 29.564a2 2 0 0 1 0-2.828L26.127 9.483Z',
        fill: '#ffffff',
        stroke: 'red',
        strokeWidth: 0
      },
      {
        id: 3,
        d: 'M27.541 13.726 13.116 28.15 25.31 40.343 39.734 25.92 27.541 13.725Zm1.414-4.243a2 2 0 0 0-2.828 0L8.874 26.736a2 2 0 0 0 0 2.828l15.021 15.022a2 2 0 0 0 2.829 0l17.253-17.253a2 2 0 0 0 0-2.828L28.955 9.482Z',
        fill: '#fff',
        stroke: '#121212',
        strokeWidth: 1
      },
      {
        id: 4,
        d: 'M40.257 28.224 25.31 43.172 12.023 29.885l28.234-1.66Z',
        fill: '#121212',
        stroke: '#121212',
        strokeWidth: 1
      },
      {
        id: 5,
        d: 'M48.3 34.71a3.155 3.155 0 1 1-6.31 0c0-1.194 1.482-3.346 2.415-4.58a.92.92 0 0 1 1.48 0c.933 1.235 2.416 3.386 2.416 4.58Z',
        fill: '#121212',
        stroke: '',
        strokeWidth: 0
      }
    ],
    viewBox: '0 0 49 46'
  },
  mode: {
    paths: [
      {
        id: 1,
        d: 'M18 36V0C8.059 0 0 8.059 0 18s8.059 18 18 18Z',
        fill: '',
        stroke: '',
        strokeWidth: 0
      },
      {
        id: 2,
        d: 'M18 36V0C8.059 0 0 8.059 0 18s8.059 18 18 18Z',
        fill: '#fff',
        stroke: '',
        strokeWidth: 0
      },
      {
        id: 3,
        d: 'M18 36v4h4v-4h-4Zm0-36h4v-4h-4v4Zm4 36V0h-8v36h8ZM4 18c0-7.732 6.268-14 14-14v-8C5.85-4-4 5.85-4 18h8Zm14 14c-7.732 0-14-6.268-14-14h-8c0 12.15 9.85 22 22 22v-8Z',
        fill: '#121212',
        stroke: '',
        strokeWidth: 0
      },
      {
        id: 4,
        d: 'M18 32c7.732 0 14-6.268 14-14S25.732 4 18 4 4 10.268 4 18s6.268 14 14 14Zm0 4c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z',
        fill: '#121212',
        stroke: '',
        strokeWidth: 0
      }
    ],
    viewBox: '0 0 36 36'
  }
};
