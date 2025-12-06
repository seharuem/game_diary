import { useEffect } from 'react';
import { MonthBtn, WeekWrap, DateWrap, TodayWrap } from '../styles/Diary.style';
import { dateStore } from '../store/dateStore';

function WeekDay({ week, date, isToday, isSelected, onClick }) {
	return (
		<DateWrap
			className={`${isToday ? 'today' : ''} 
      ${isSelected ? 'select' : ''}`}
			onClick={onClick}
		>
			<span>{week}</span>
			<span>{date}</span>
		</DateWrap>
	);
}

export default function CalendarW({ setDate }) {
	const { year, month, todayDate, weekDates, dayIdx, select } = dateStore();

	useEffect(() => {
		const year = weekDates[dayIdx].year;
		const month = String(weekDates[dayIdx].month + 1).padStart(2, '0');
		const date = String(weekDates[dayIdx].date).padStart(2, '0');
		const fullDate = `${year}-${month}-${date}`;

		setDate(fullDate);
	}, [dayIdx, setDate, weekDates]);

	return (
		<>
			<MonthBtn>{month + 1}월</MonthBtn>

			<WeekWrap>
				{weekDates.map((d, idx) => (
					<WeekDay
						key={idx}
						week={d.week}
						date={d.date}
						isToday={
							d.date === todayDate && d.month === month && d.year === year
						}
						isSelected={dayIdx === idx}
						onClick={() => select(idx)}
					/>
				))}
			</WeekWrap>

			<TodayWrap>
				{weekDates[dayIdx].ymd.toLocaleDateString('ko-KR', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					weekday: 'long'
				})}{' '}
			</TodayWrap>
		</>
	);
}
