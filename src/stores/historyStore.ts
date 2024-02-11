import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HistoryType } from '@/components/History/type';

interface HistoryStore {
  results: { [key: string]: HistoryType[] };
  bookmarks: { [key: string]: HistoryType[] };
  setResultHistory: (key: string, result: HistoryType) => void;
  setBookmarkHistory: (key: string, bookmark: HistoryType) => void;
}

export const useHistoryStore = create<HistoryStore>()(
  persist(
    set => ({
      results: {
        basic: [],
        percent: [],
        viewport: [],
        remAndEm: []
      },
      bookmarks: {},
      setResultHistory: (key, result) =>
        set(state => ({
          results: {
            ...state.results,
            [key]: [...(state.results[key] || []), result]
          }
        })),
      setBookmarkHistory: (key, clickedBookmark) =>
        set(state => {
          const { bookmarks } = state;

          const updatedBookmarks = bookmarks[key] || [];
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
              [key]: updatedBookmarks
            }
          };
        })
    }),
    { name: 'historyStore', partialize: ({ bookmarks }) => ({ bookmarks }) }
  )
);
