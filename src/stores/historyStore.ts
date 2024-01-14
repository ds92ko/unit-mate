import { create } from 'zustand';
import { HistoryType } from '@/components/History/type';

type HistoryDataType = {
  type: string;
  data: HistoryType[];
};

export interface HistoryStoreType {
  historyData: HistoryDataType[];
}

export const useHistoryStore = create<HistoryStoreType>(() => ({
  historyData: [
    {
      type: 'basic',
      data: [
        {
          id: 0,
          input: '1+3',
          result: '4',
          isBookmark: true
        },
        {
          id: 1,
          input: '2+3',
          result: '5',
          isBookmark: false
        },
        {
          id: 2,
          input: '3+3',
          result: '6',
          isBookmark: false
        },
        {
          id: 3,
          input: '4+3',
          result: '7',
          isBookmark: true
        },
        {
          id: 4,
          input: '5+3',
          result: '8',
          isBookmark: true
        }
      ]
    },
    {
      type: 'percent',
      data: []
    },
    {
      type: 'viewport',
      data: []
    },
    {
      type: 'remAndEm',
      data: []
    }
  ]
}));
