import { create } from 'zustand';

export const gameStore = create((set) => ({
	isChoice: false,
	open: () => set({ isChoice: true }),
	close: () => set({ isChoice: false }),

	choiceI: null,
	setChoiceI: (i) => set({ choiceI: i }),

	mode: 'view',
	setMode: (m) => set({ mode: m }),

	editIdx: null,
	setEditIdx: (i) => set({ editIdx: i }),

	gameData: { name: '', color: 3 },
	setGameData: (data) => set({ gameData: data }),
	updateData: (name, value) =>
		set((state) => ({ gameData: { ...state.gameData, [name]: value } })),

	cancel: () =>
		set({ mode: 'view', editIdx: null, gameData: { name: '', color: 3 } }),

	games: [],

	addGame: (data) => set((state) => ({ games: [...state.games, data] })),

	editGame: (data) =>
		set((state) => {
			const updated = [...state.games];
			updated[state.editIdx] = data;
			return { games: updated };
		}),

	deleteGame: () =>
		set((state) => ({
			games: state.games.filter((_, i) => i !== state.editIdx)
		}))
}));
