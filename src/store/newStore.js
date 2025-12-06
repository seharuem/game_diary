import { create } from 'zustand';

export const diaryStore = create((set) => ({
	isNew: false,
	write: () => set({ isNew: true }),
	close: () => set({ isNew: false })
}));
