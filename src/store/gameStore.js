import { create } from 'zustand';

export const gameStore = create((set) => ({
	isChoice: false,
	open: () => set({ isChoice: true }),
	close: () => set({ isChoice: false }),

	choiceI: null,
	setChoiceI: (i) => set({ choiceI: i })
}));
