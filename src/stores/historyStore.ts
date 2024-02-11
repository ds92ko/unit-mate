import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HistoryType } from '@/components/History/type';

interface HistoryStore {
  results: { [key: string]: HistoryType[] };
  bookmarks: { [key: string]: HistoryType[] };
  setResultHistory: (key: string, newResult: HistoryType) => void;
  setBookmarkHistory: (key: string, newBookmark: HistoryType) => void;
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
      setResultHistory: (key, newResult) =>
        set(state => {
          const { results } = state;

          const updatedResults = results[key] || [];
          const existingResultIndex = updatedResults.findIndex(
            result => result.id === newResult.id
          );

          if (existingResultIndex !== -1) {
            updatedResults[existingResultIndex] = newResult;
          } else {
            updatedResults.push(newResult);
          }

          return {
            ...state,
            results: {
              ...results,
              [key]: updatedResults
            }
          };
        }),
      setBookmarkHistory: (key, newBookmark) =>
        set(state => {
          const { bookmarks } = state;

          let updatedBookmarks = bookmarks[key] || [];
          const existingBookmarkIndex = updatedBookmarks.findIndex(
            bookmark => bookmark.id === newBookmark.id
          );

          if (existingBookmarkIndex !== -1) {
            updatedBookmarks = updatedBookmarks.filter(bookmark => bookmark.id !== newBookmark.id);
          } else {
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
