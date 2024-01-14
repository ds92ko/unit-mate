import { create } from 'zustand';
import { HistoryType } from '@/components/History/type';

type HistoryDataType = {
  type: string;
  data: HistoryType[];
};

export interface HistoryStoreType {
  historyData: HistoryDataType[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleBookmark: (itemId: number) => void;
}

export const useHistoryStore = create<HistoryStoreType>(set => ({
  activeTab: 'Basic',
  historyData: [
    {
      type: 'Basic',
      data: [
        {
          id: 0,
          input: '1+3',
          result: '4',
          isBookmark: false
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
          isBookmark: false
        },
        {
          id: 4,
          input: '5+3',
          result: '8',
          isBookmark: false
        }
      ]
    },
    {
      type: 'Percent',
      data: []
    },
    {
      type: 'Viewport',
      data: []
    },
    {
      type: 'REM & EM',
      data: []
    }
  ],
  setActiveTab: tab => {
    set(() => ({
      activeTab: tab
    }));
  },
  toggleBookmark: itemId => {
    set(state => {
      const updatedHistoryData = state.historyData.map(historyItem => {
        if (historyItem.type === state.activeTab) {
          const updatedData = historyItem.data.map(item =>
            item.id === itemId ? { ...item, isBookmark: !item.isBookmark } : item
          );
          return { ...historyItem, data: updatedData };
        }
        return historyItem;
      });

      return { historyData: updatedHistoryData };
    });
  }
}));
