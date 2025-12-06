import { create } from 'zustand';

const week = ['일', '월', '화', '수', '목', '금', '토'];

export const dateStore = create((set) => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const todayDate = today.getDate();
	const todayDay = today.getDay();
	const startDateValue = todayDate - todayDay;

	const weekDates = Array.from({ length: 7 }, (_, i) => {
		const date = new Date(year, month, startDateValue + i);
		return {
			ymd: date,
			week: week[i],
			date: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear()
		};
	});

	const dayIdx = weekDates.findIndex(
		(d) => d.date === todayDate && d.month === month && d.year === year
	);

	return {
		year,
		month,
		todayDate,
		weekDates,
		dayIdx,
		select: (i) => set({ dayIdx: i })
	};
});
