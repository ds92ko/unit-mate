import create from 'zustand';
import { persist } from 'zustand/middleware';
import { HistoryType } from '@/components/History/type';

interface HistoryStore {
  activeTab: string;
  bookmarks: { [key: string]: HistoryType[] };
  setActiveTab: (tab: string) => void;
  toggleBookmark: (bookmark: HistoryType) => void;
}

export const useHistoryStore = create(
  persist<HistoryStore>(
    set => ({
      activeTab: 'Basic',
      bookmarks: {},
      setActiveTab: tab => set({ activeTab: tab }),
      toggleBookmark: clickedBookmark =>
        set(state => {
          const { activeTab, bookmarks } = state;

          const updatedBookmarks = bookmarks[activeTab] || [];
          const existingBookmarkIndex = updatedBookmarks.findIndex(
            bookmark => bookmark.id === clickedBookmark.id
          );

          if (existingBookmarkIndex !== -1) {
            const updatedBookmark = {
              ...updatedBookmarks[existingBookmarkIndex],
              isBookmark: !clickedBookmark.isBookmark
            };

            updatedBookmarks[existingBookmarkIndex] = updatedBookmark;
          } else {
            const newBookmark: HistoryType = { ...clickedBookmark, isBookmark: true };
            updatedBookmarks.push(newBookmark);
          }

          return {
            ...state,
            bookmarks: {
              ...bookmarks,
              [activeTab]: updatedBookmarks
            }
          };
        })
    }),
    { name: 'bookmarkStore' }
  )
);
