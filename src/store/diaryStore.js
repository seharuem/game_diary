import { create } from 'zustand';

export const diaryStore = create((set) => ({
	isNew: false,
	write: () => set({ isNew: true }),
	close: () => set({ isNew: false }),

	imgUrls: [],

	selectImg: (files) => {
		if (files.length === 0) return;

		const newUrls = Array.from(files).map((file) => URL.createObjectURL(file));
		set((state) => ({ imgUrls: [...state.imgUrls, ...newUrls] }));
	},

	imgRemove: (index) => {
		set((state) => {
			const imgRevoke = state.imgUrls[index];
			if (imgRevoke) URL.revokeObjectURL(imgRevoke);
			const newUrls = state.imgUrls.filter((_, i) => i !== index);
			return { imgUrls: newUrls };
		});
	},

	clearUrl: () => set(() => ({ imgUrls: [] })),
	
	diaries: [],

	addDiary: (diary) => set((state) => ({ diaries: [...state.diaries, diary] }))
}));
